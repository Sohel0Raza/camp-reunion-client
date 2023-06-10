import { Link, NavLink } from "react-router-dom";
import logo from "../../../../src/assets/green-camp-logo-vector-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Log Out Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: `${error}`,
          });
        }
      });
  };
  const navItem = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/classes"
      >
        Classes
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/instructor"
      >
        Instructor
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "default")}
        to="/aboutus"
      >
        About Us
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-gray-700 text-white fixed z-40 bg-opacity-40 md:w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-8 w-8 md:h-12 md:w-12">
            {" "}
            <img src={logo} alt="" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold uppercase">
            Reunion
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold space-x-7">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end md:mr-10">
        {user ? (
          <>
            <div className="flex justify-between items-center">
              <div className="h-7 w-7 mr-3">
                <img
                  className="h-full w-full rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <button className="" onClick={handleLogOut}>
                SIGN OUT
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn-primary">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
