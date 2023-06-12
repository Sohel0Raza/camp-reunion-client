import { useState } from "react";
import "./CheckoutForm.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({ paymentClass, price }) => {
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log("card", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknow",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError);
    }
    console.log("paymentIntent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;
      const payment = {
        name: user?.displayName,
        email: user?.email,
        transactionId,
        price,
        instructor_name:paymentClass.instructor_name,
        image:paymentClass.image,
        date: new Date(),
        class_name: paymentClass.class_name,
        paymented_id: paymentClass.selectClassId,
        status:paymentIntent.status
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertresult.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Complete",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && <p className="text-error mb-3">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600 mb-3">
          <span className="font-bold text-black"> Transaction ID: </span>{" "}
          {transactionId}
        </p>
      )}
      <button
        className="btn btn-success btn-outline btn-sm"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
    </form>
  );
};
export default CheckoutForm;
