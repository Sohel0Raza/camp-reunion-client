import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {refetch, data: popularInstructor=[], isLoading: loading} = useQuery({
        queryKey:['populerInstructor'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/populerInstructor')
            return res.json()
        }
    })
    return [popularInstructor, loading, refetch]
};

export default useInstructor;