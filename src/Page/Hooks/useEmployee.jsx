import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useEmployee = () => {
    const axiosPublic = useAxiosPublic()

    const {data: employee = [], refetch} = useQuery({
        queryKey: ['employee'],
        queryFn: async() => {
            const res = await axiosPublic.get('/employee-account')
            return res.data
        }
    })

    return [employee, refetch]
}

export default useEmployee;