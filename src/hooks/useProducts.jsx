import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiospublic from "./useAxiospublic";

const useProducts = () => {
    const axiosPublic = useAxiospublic()
    const {user} = useAuth()
    const {refetch, data: products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?email=${user?.email}`)
            return res.data
        }
    })
    return [products, refetch]
};

export default useProducts;