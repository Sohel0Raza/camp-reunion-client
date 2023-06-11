import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/SignUp";
import Classes from "../pages/classes/Classes";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Instructor from "../pages/instructor/Instructor";
import Dashboard from "../layout/Dashboard";
import SelectedClasses from "../pages/Dashboard/selectedClasses/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../pages/Dashboard/adminDashboard/mangeUser/AllUser";
import AdminRoute from "./AdminRoute";
import AddClass from "../pages/Dashboard/instructorDashboard/AddClass";
import ManageClass from "../pages/Dashboard/adminDashboard/manageClass/ManageClass";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/instructor",
        element:<Instructor />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'selectClass',
        element:<SelectedClasses/>
      },
      {
        path:'users',
        element:<AdminRoute><AllUser/></AdminRoute>
      },
      {
        path:'manageClass',
        element:<AdminRoute><ManageClass/></AdminRoute>
      },
      {
        path:'addClass',
        element:<InstructorRoute><AddClass/></InstructorRoute>
      }
    ]
  },
]);
export default router;
