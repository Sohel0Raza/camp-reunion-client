import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const {refetch, data: users=[], isLoading} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        }
    })
    return [users, isLoading, refetch]
};

export default useUsers;