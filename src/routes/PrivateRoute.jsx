import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
    <div className="flex justify-center md:mt-52"><FadeLoader color="#36d7b7" /></div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;
