import { FaHome } from "react-icons/fa";
import { FaBook, FaCartPlus, FaShop, FaUser, FaUsers } from "react-icons/fa6";
import { MdOutlineManageHistory, MdOutlinePostAdd } from "react-icons/md";
import { RiAdminFill, RiContactsBook3Fill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import useUsers from "../hooks/useUsers";

const Sidebar = () => {

    const [users] = useUsers()

  return (
    <div>
        <h1 className="text-3xl font-bold text-orange-600 px-5 pt-5">Gadget Shop</h1>
      <ul className="list-none p-2 lg:px-7 lg:pt-5 text-xs lg:text-lg text-black space-y-2 font-semibold ">
        {users?.role === "seller" ? (
          <>
            <li className="hover:underline hover:text-orange-600">
              <NavLink
                to="/dashboard/overview"
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
                  Admin Overview
                </span>
              </NavLink>
            </li>
            <li className="hover:underline hover:text-orange-600">
              <NavLink
                to="/dashboard/addproducts"
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
                  Add Products
                </span>
              </NavLink>
            </li>
            <li className="hover:underline hover:text-orange-600">
              <NavLink
                to="/dashboard/myproducts"
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
                  My Products
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
  );
};

export default Sidebar;
