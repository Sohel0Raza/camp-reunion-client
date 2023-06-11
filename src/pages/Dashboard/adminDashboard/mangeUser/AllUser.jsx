import Swal from "sweetalert2";
import useUsers from "../../../../hooks/useUsers";
import { useState } from "react";

const AllUser = () => {
  const [users, , refetch] = useUsers();
  const [disable, setDisable] = useState(true);
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user?.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user?.name} is an instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  
  return (
    <div className="h-full">
      <h3 className="text-4xl text-center my-10 uppercase">All Users</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td className="font-bold">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role || "student"}</td>
                <th>
                  {user.role === "admin" || user.role === "instructor" ? (
                    <button
                      disabled={disable}
                      className="btn btn-ghost btn-xs bg-orange-400 text-white"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-xs bg-orange-400 text-white"
                    >
                      Make Admin
                    </button>
                  )}
                </th>
                <th>
                  {user.role === "instructor" || user.role === "admin" ? (
                    <button
                      disabled={disable}
                      className="btn btn-ghost btn-xs bg-green-400 text-white"
                    >
                      Make Instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-ghost btn-xs bg-green-400 text-white"
                    >
                      Make Instructor
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
