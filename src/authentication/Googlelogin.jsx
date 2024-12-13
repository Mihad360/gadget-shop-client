import { FaGoogle } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Googlelogin = () => {

    const {googleLogin} = useAuth()
    const navigate = useNavigate()

    const handleGoogle = async () => {
        await googleLogin()
        navigate('/')
    }

    return (
        <div>
            <button onClick={handleGoogle} className="px-5 py-1 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 duration-150 transition-all hover:scale-105 flex items-center gap-4">
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
        </div>
    );
};

export default Googlelogin;