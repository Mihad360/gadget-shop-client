import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";
import useUsers from "../hooks/useUsers";

const Sellerroute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [users] = useUsers();

  if (loading || !users?.role) {
    return (
      <div className="">
        <Loading></Loading>
      </div>
    );
  }

  if (user && users?.role === "seller") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Sellerroute;
