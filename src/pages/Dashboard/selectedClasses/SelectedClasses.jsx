import { FaTrashAlt } from "react-icons/fa";
import useSelectClass from "../../../hooks/useSelectClass";
import Swal from "sweetalert2";
import FadeLoader from "react-spinners/FadeLoader";

const SelectedClasses = () => {
  const [selectClass, isLoading, refetch] = useSelectClass();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center md:py-28">
        <FadeLoader color="#36d7b7" />
      </div>
    );
  }
  const handleDelete = (seClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectClass/${seClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="h-full">
      <h3 className="text-4xl text-center my-10 uppercase">
        My Selected Classes
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectClass.map((seClass, index) => (
              <tr key={seClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={seClass.image} alt="class" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">{seClass.class_name}</td>
                <td>{seClass.instructor_name}</td>
                <th>$ {seClass.price}</th>
                <th>
                  <button
                    onClick={() => handleDelete(seClass)}
                    className="btn btn-ghost btn-xs bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs bg-green-600 text-white">
                    Pay
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

export default SelectedClasses;
