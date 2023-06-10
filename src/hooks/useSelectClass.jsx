import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelectClass = () => {
    const {user} = useContext(AuthContext)
    const {refetch, data: selectClass = [], isLoading:loading} = useQuery({
        queryKey:['selectClass', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/selectClass?email=${user?.email}`)
            return res.json();
        }
    })
    return [selectClass,loading, refetch,]
};

export default useSelectClass;