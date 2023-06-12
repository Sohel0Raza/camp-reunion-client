import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    refetch,
    data: paymentClass = [],
    isLoading,
  } = useQuery({
    queryKey: ["paymentClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  return [paymentClass, isLoading, refetch];
};

export default usePayment;
