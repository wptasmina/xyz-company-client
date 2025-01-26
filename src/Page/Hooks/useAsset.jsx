
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';



const useAsset = (queryParams = {}) => {
    const axiosPublic = useAxiosPublic();

    const { search = '', sort = '', product_type = 'all' } = queryParams; //Destructure query defaults

    const { data: assets = [], refetch } = useQuery({
        queryKey: ['assets', search, sort, product_type], // Include query key
        queryFn: async () => {
            const res = await axiosPublic.get('/assets', {
                params: { search, sort, product_type }, //GET request
            });
            return res.data;
        },
    });

    return [assets, refetch];
};

export default useAsset;
