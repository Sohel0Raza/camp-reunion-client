import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectClass = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    refetch,
    data: selectClass = [],
    isLoading,
  } = useQuery({
    queryKey: ["selectClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectClass?email=${user?.email}`);
      console.log('res', res.data)
      return res.data;
    },
  });
  return [selectClass, isLoading, refetch];
};

export default useSelectClass;
