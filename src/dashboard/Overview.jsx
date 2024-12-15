import useAuth from "../hooks/useAuth";
import useUsers from "../hooks/useUsers";

const Overview = () => {

    const {user} = useAuth()
    const [users, refetch] = useUsers()
    console.log(users);

    return (
        <div>
            <h1 className="text-2xl font-semibold text-orange-500">User Overview</h1>
            <div>

            </div>
        </div>
    );
};

export default Overview;