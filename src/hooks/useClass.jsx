import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    const {refetch, data: classes=[], isLoading: loading} = useQuery({
        queryKey:['classes'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/allClass')
            return res.json()
        }
    })
    return [classes, loading, refetch]
};

export default useClass;