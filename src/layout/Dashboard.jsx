import { NavLink, Outlet } from "react-router-dom";
import { GrCheckboxSelected } from "react-icons/gr";
import { MdMenuBook, MdOutlinePayment, MdPayments } from "react-icons/md";
import { ImMan } from "react-icons/im";
import { FaBook, FaHome, FaUserAlt } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useCheckInstructor from "../hooks/useCheckInstructor";
import FadeLoader from "react-spinners/FadeLoader";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin()
  const [isInstructor, isInstructorLoading] = useCheckInstructor()
  if(isAdminLoading || isInstructorLoading){
    return <div className="flex items-center justify-center md:my-20"><FadeLoader color="#36d7b7" /></div>
  }
  return (
    <div className="md:w-10/12 mx-auto">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu px-5 w-80 uppercase bg-gradient-to-t from-[#5bab6d] to-green-400">
            <div className="ml-4 my-10">
              <li className="font-bold text-2xl">Camp Reunion</li>
            </div>
            {isAdmin? (
              <>
                <li>
                  <NavLink to="/dashboard/manageClass">
                    <FaBook></FaBook>
                    Manage  Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUserAlt></FaUserAlt>
                    Manage User
                  </NavLink>
                </li>
              </>
            ) :
            isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/addClass">
                    <GrCheckboxSelected></GrCheckboxSelected>
                    Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/home">
                    <MdOutlinePayment></MdOutlinePayment>
                    My Classes
                  </NavLink>
                </li>
              </>
            ): <>
            <li>
              <NavLink to="/dashboard/selectClass">
                <GrCheckboxSelected></GrCheckboxSelected>
                Selected Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/enrollClass">
                <MdOutlinePayment></MdOutlinePayment>
                Enrolled Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentClass">
                <MdPayments></MdPayments>
                Payment History
              </NavLink>
            </li>
            </>}
            <hr className="text-white my-10" />
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <MdMenuBook />
                All Class
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructor">
                <ImMan></ImMan>
                All Instructor
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
