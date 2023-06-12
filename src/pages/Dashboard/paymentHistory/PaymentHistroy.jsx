import usePayment from "../../../hooks/usePayment";

const PaymentHistroy = () => {
    const [paymentClass] = usePayment()
    return (
        <div className="h-full w-full">
      <h3 className="text-4xl text-center my-10 uppercase">
        My Payment History
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>TransactionId</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {paymentClass.map((payClass, index) => (
              <tr key={payClass._id}>
                <td>{index + 1}</td>
                <td>
                  {payClass.name}
                </td>
                <td>
                  {payClass.email}
                </td>
                <td className="font-bold">{payClass.class_name}</td>
                <td>$ {payClass.price}</td>
                <td>{payClass.transactionId}</td>
                <td className="text-green-500">{payClass.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default PaymentHistroy;