import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCheckInstructor = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey:['isInstructor', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get( `/users/instructor/${user?.email}`)
            console.log('isInstructor', res)
            return res.data.instructor
        }
    })
    return [isInstructor, isInstructorLoading]

};

export default useCheckInstructor;