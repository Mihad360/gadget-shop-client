import { FaHome } from "react-icons/fa";
import { FaBook, FaCartPlus, FaShop, FaUser, FaUsers } from "react-icons/fa6";
import { MdOutlineManageHistory, MdOutlinePostAdd } from "react-icons/md";
import { RiAdminFill, RiContactsBook3Fill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex items-start gap-3 overflow-hidden bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="overflow-hidden w-80 border-r-2 border-orange-500 h-screen">
        <Sidebar />
      </div>
      <div className="w-full pr-3 overflow-y-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
