import useClass from "../../../hooks/useClass";

const MyAddedClass = () => {
    const [classes, , refetch] = useClass();

  const allClass = classes.filter(
    (cls) =>
      cls.status === "pending" ||
      cls.status === "approved" ||
      cls.status === "denied"
  );
    return (
        <div className="h-full w-full">
        <h3 className="text-4xl text-center my-10 uppercase">New Class</h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
               
              </tr>
            </thead>
            <tbody>
              {allClass.map((newClass, index) => (
                <tr key={newClass._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={newClass.image} alt="class" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">{newClass.class_name}</td>
                  <td>{newClass.instructor_name}</td>
                  <td>{newClass.instructor_email}</td>
                  <td>{newClass.available_seats}</td>
                  <td>$ {newClass.price}</td>
                  <td>{newClass.status}</td>
                  <td>
                    
                      <button className="btn btn-ghost btn-xs bg-yellow-600 text-white">
                        Update
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyAddedClass;