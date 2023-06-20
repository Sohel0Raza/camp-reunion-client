import { useQuery } from "@tanstack/react-query";

const usePopularClass = () => {
  const {
    refetch,
    data: popularClass = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["populerClass"],
    queryFn: async () => {
      const res = await fetch(
        "https://camp-reunion-server-sohel0raza.vercel.app/populerClass"
      );
      return res.json();
    },
  });
  return [popularClass, loading, refetch];
};

export default usePopularClass;
