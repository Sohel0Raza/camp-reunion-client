import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { AuthContext } from "../providers/AuthProvider";
import useCheckInstructor from "../hooks/useCheckInstructor";

const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useCheckInstructor()
    const location = useLocation()

    if(loading || isInstructorLoading){
        return <div className="flex justify-center md:mt-52"><FadeLoader color="#36d7b7" /></div>
    }
    if(user && isInstructor){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default InstructorRoute ;
