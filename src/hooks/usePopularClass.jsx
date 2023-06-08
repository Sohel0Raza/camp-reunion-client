import { useQuery } from "@tanstack/react-query"

const usePopularClass = () => {
        const {refetch, data: popularClass=[], isLoading: loading} = useQuery({
            queryKey:['classes'],
            queryFn: async()=>{
                const res = await fetch('http://localhost:5000/populerClass')
                return res.json()
            }
        })
        return [popularClass, loading, refetch]
};

export default usePopularClass;