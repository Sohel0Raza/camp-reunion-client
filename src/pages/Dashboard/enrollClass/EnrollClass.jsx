import usePayment from "../../../hooks/usePayment";

const EnrollClass = () => {
  const [paymentClass] = usePayment();
  return (
    <div className="h-full w-full">
      <h3 className="text-4xl text-center my-10 uppercase">
        My Enroll Classes
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor name</th>
              <th>Price</th>
              <th>Enroll</th>
            </tr>
          </thead>
          <tbody>
            {paymentClass.map((payClass, index) => (
              <tr key={payClass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={payClass.image} alt="class" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">{payClass.class_name}</td>
                <td>{payClass. instructor_name}</td>
                <td>$ {payClass.price}</td>
                <td className="text-green-500">{payClass.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollClass;
