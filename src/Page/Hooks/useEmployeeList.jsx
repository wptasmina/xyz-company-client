import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";




const useEmployeeList = () => {
    const axiosPublic = useAxiosPublic()
  const {user} =useContext(AuthContext);; //   useAuth hook

  // TanStack query
  const { refetch, data: employeeList = [] } = useQuery({
    queryKey: ["employeeList", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/employee-accounts/${user?.email}`);
      return res.data;
    },
  });
  return [employeeList, refetch];
};

export default useEmployeeList;
