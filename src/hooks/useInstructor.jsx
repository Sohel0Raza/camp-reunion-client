import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const {
    refetch,
    data: popularInstructor = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["populerInstructor"],
    queryFn: async () => {
      const res = await fetch(
        "https://camp-reunion-server.vercel.app/populerInstructor"
      );
      return res.json();
    },
  });
  return [popularInstructor, loading, refetch];
};

export default useInstructor;
