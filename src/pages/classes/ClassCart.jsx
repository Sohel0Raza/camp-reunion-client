import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useSelectClass from "../../hooks/useSelectClass";
import useAdmin from "../../hooks/useAdmin";
import useCheckInstructor from "../../hooks/useCheckInstructor";
import { useState } from "react";

const ClassCart = ({ cl }) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useCheckInstructor();

  const [disable, setDisable] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const { _id, class_name, image, instructor_name, available_seats, price } =
    cl;

  const { user, loading } = useContext(AuthContext);
  const [, , refetch] = useSelectClass();
  const navigate = useNavigate();
  const location = useLocation();

  const handleEnrollClassCart = () => {
    setDisabled(true);
    const selectClass = {
      selectClassId: _id,
      class_name,
      image,
      instructor_name,
      price,
      email: user?.email,
    };
    if (user && user?.email) {
      fetch("https://camp-reunion-server.vercel.app/selectClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Select Class SuccessFully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Plase Login to Select class ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card shadow-2xl bg-slate-100 hover:bg-gray-200">
      <figure>
        <img src={image} alt="classes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{class_name}</h2>
        <p> Instructor: {instructor_name}</p>
        <div>
          <p>Sets: {available_seats}</p>
          <p className="text-green-600">Price: ${price}</p>
        </div>
        {isInstructor ? (
          <div className="card-actions">
            <button disabled={disabled} className="btn btn-ghost btn-sm">
              Select Now
            </button>
          </div>
        ) : isAdmin ? (
          <div className="card-actions">
            <button disabled={disable} className="btn btn-ghost btn-sm">
              Select Now
            </button>
          </div>
        ) : (
          <div className="card-actions">
            <Link>
              <button
                onClick={() => handleEnrollClassCart(cl)}
                disabled={disabled}
                className="btn-secondary"
              >
                Select Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassCart;
