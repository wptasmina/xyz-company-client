
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';



const useAsset = (queryParams = {}) => {
    const axiosPublic = useAxiosPublic();

    const { search = '', sort = '', product_type = 'all' } = queryParams; // Destructure query parameters with defaults

    const { data: assets = [], refetch } = useQuery({
        queryKey: ['assets', search, sort, product_type], // Include query parameters in the query key
        queryFn: async () => {
            const res = await axiosPublic.get('/assets', {
                params: { search, sort, product_type }, // Pass query parameters to the GET request
            });
            return res.data;
        },
    });

    return [assets, refetch];
};

export default useAsset;
