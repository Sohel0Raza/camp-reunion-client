import { Elements } from "@stripe/react-stripe-js";
import useSelectClass from "../../../hooks/useSelectClass";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const [selectClass] = useSelectClass();
  const { id } = useParams();
  const [paymentClass] = selectClass.filter((cl) => cl.selectClassId === id);
  const price = paymentClass?.price;

  return (
    <div className="h-full md:w-9/12 mx-auto">
      <h3 className="text-4xl text-center my-10 uppercase">
        Payment Now
      </h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm paymentClass={paymentClass} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
