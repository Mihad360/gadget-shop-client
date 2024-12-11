import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Layout = () => {
    return (
        <div className="">
            <div className="bg-gray-100">
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;