import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxiospublic";
import useAuth from "./useAuth";

const useUsers = () => {
    const axiosPublic = useAxiospublic()
    const {user} = useAuth()
    const {refetch, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res.data
        }
    })
    return [users, refetch]
};

export default useUsers;