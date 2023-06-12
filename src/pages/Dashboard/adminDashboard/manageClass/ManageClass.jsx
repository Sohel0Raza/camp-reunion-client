import Swal from "sweetalert2";
import useClass from "../../../../hooks/useClass";
import { useState } from "react";

const ManageClass = () => {
  const [classes, , refetch] = useClass();
  const [disable, setDisable] = useState(true);

  const allClass = classes.filter(
    (cls) =>
      cls.status === "pending" ||
      cls.status === "approved" ||
      cls.status === "denied"
  );

  const handleApproveClass = (newClass) => {
    fetch(
      `https://camp-reunion-server.vercel.app/allClass/approv/${newClass._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class Aproved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDenyClass = (newClass) => {
    fetch(
      `https://camp-reunion-server.vercel.app/allClass/deny/${newClass._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Class Denied",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
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
              <th>Action</th>
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
                <th>$ {newClass.price}</th>
                <td>{newClass.status}</td>
                <th>
                  {newClass.status === "approved" ||
                  newClass.status === "denied" ? (
                    <>
                      <button
                        disabled={disable}
                        className="btn btn-ghost btn-xs bg-green-600 text-white"
                      >
                        Approve
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleApproveClass(newClass)}
                        className="btn btn-ghost btn-xs bg-green-600 text-white"
                      >
                        Approve
                      </button>
                    </>
                  )}
                </th>
                <th>
                  {newClass.status === "approved" ||
                  newClass.status === "denied" ? (
                    <>
                      <button
                        disabled={disable}
                        className="btn btn-ghost btn-xs bg-green-600 text-white"
                      >
                        Deny
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleDenyClass(newClass)}
                        className="btn btn-ghost btn-xs bg-red-600 text-white"
                      >
                        Deny
                      </button>
                    </>
                  )}
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs bg-yellow-600 text-white">
                    Feedback
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
