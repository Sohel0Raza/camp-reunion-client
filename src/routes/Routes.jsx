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
        element: <Instructor />,
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
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'selectClass',
        element:<SelectedClasses/>
      }
    ]
  },
]);
export default router;
