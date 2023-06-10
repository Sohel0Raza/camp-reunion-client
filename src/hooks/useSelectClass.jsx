import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelectClass = () => {
    const {user,loading} = useContext(AuthContext)
    const {refetch, data: selectClass = [], isLoading} = useQuery({
        queryKey:['selectClass', user?.email],
        enabled:!loading,
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/selectClass?email=${user?.email}`)
            return res.json();
        }
    })
    return [selectClass,isLoading, refetch,]
};

export default useSelectClass;