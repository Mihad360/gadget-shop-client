import { FaHome } from "react-icons/fa";
import { FaBook, FaCartPlus, FaShop, FaUser, FaUsers } from "react-icons/fa6";
import { MdOutlineManageHistory, MdOutlinePostAdd } from "react-icons/md";
import { RiAdminFill, RiContactsBook3Fill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div>
      <div className="container mx-auto grid grid-cols-6">
        <div className="min-h-screen">
          <ul className="list-none p-2 lg:p-7 text-xs lg:text-lg text-black space-y-2 font-semibold">
            {isAdmin ? (
              <>
                <li className="hover:underline hover:text-orange-600">
                  <NavLink
                    to="/dashboard/adminhome"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-600 font-bold"
                        : ""
                    }
                  >
                    <span className="flex items-center gap-1 lg:gap-3">
                      <RiAdminFill />
                      Admin Home
                    </span>
                  </NavLink>
                </li>
                <li className="hover:underline hover:text-orange-600">
                  <NavLink
                    to="/dashboard/additems"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-600 font-bold"
                        : ""
                    }
                  >
                    <span className="flex items-center gap-1 lg:gap-3">
                      <MdOutlinePostAdd />
                      Add Items
                    </span>
                  </NavLink>
                </li>
                <li className="hover:underline hover:text-orange-600">
                  <NavLink
                    to="/dashboard/manageitems"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-600 font-bold"
                        : ""
                    }
                  >
                    <span className="flex items-center gap-1 lg:gap-3">
                      <MdOutlineManageHistory />
                      Manage Items
                    </span>
                  </NavLink>
                </li>
                <li className="hover:underline hover:text-orange-600">
                  <NavLink
                    to="/dashboard/allusers"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-600 font-bold"
                        : ""
                    }
                  >
                    <span className="flex items-center gap-1 lg:gap-3">
                      <FaUsers />
                      All Users
                    </span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="hover:underline hover:text-orange-600">
                  <NavLink
                    to="/dashboard/userhome"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-600 font-bold"
                        : ""
                    }
                  >
                    <span className="flex items-center gap-1 lg:gap-3">
                      <FaUser />
                      User Home
                    </span>
                  </NavLink>
                </li>
                <li className="hover:underline hover:text-orange-600">
                  <NavLink
                    to="/dashboard/carts"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-600 font-bold"
                        : ""
                    }
                  >
                    <span className="flex items-center gap-1 lg:gap-3">
                      <FaCartPlus />
                      Carts<p className="text-orange-600 font-semibold">()</p>
                    </span>
                  </NavLink>
                </li>
                <li className="hover:underline hover:text-orange-600">
                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-600 font-bold"
                        : ""
                    }
                  >
                    <span className="flex items-center gap-1 lg:gap-3">
                      <FaBook />
                      Payment
                    </span>
                  </NavLink>
                </li>
                <li className="hover:underline hover:text-orange-600">
                  <NavLink
                    to="/dashboard/paymenthistory"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-600 font-bold"
                        : ""
                    }
                  >
                    <span className="flex items-center gap-1 lg:gap-3">
                      <FaBook />
                      Payment History
                    </span>
                  </NavLink>
                </li>
                <li className="hover:underline hover:text-orange-600">
                  <NavLink
                    to="/dashboard/reviews"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-orange-600 font-bold"
                        : ""
                    }
                  >
                    <span className="flex items-center gap-1 lg:gap-3">
                      <VscPreview />
                      Reviews
                    </span>
                  </NavLink>
                </li>
              </>
            )}
            {/* Horizontal Divider */}
            <div className="w-full">
              <div className="border-t border-neutral-500 my-4"></div>
            </div>
            {/* ---------- */}
            <li className="hover:underline hover:text-orange-600">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-600 font-bold"
                    : ""
                }
              >
                <span className="flex items-center gap-1 lg:gap-3">
                  <FaHome />
                  Home
                </span>
              </NavLink>
            </li>
            <li className="hover:underline hover:text-orange-600">
              <NavLink
                to="/shop"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-600 font-bold"
                    : ""
                }
              >
                <span className="flex items-center gap-1 lg:gap-3">
                  <FaShop />
                  Shop
                </span>
              </NavLink>
            </li>
            <li className="hover:underline hover:text-orange-600">
              <NavLink
                to="/contactus"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-600 font-bold"
                    : ""
                }
              >
                <span className="flex items-center gap-1 lg:gap-3">
                  <RiContactsBook3Fill />
                  Contact Us
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Vertical Divider */}
        <div className="relative flex ">
          <div className="absolute left-0 top-0 h-full w-px bg-neutral-500"></div>
        </div>
        {/* ---------- */}
        <div className="ml-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
