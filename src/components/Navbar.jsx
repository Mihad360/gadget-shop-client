import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg"
            >
              <li>
                <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <h1 className="text-xl">GadgetShop</h1>
        </div>
        <div className="navbar-center hidden lg:block">
          <ul className="menu menu-horizontal flex items-center gap-5">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          {}
          <Link
            to="/login"
            className="px-5 py-1 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 duration-150 transition-all hover:scale-105"
          >
            SignIn
          </Link>
          <Link
            to="/signup"
            className="px-5 py-1 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 duration-150 transition-all hover:scale-105"
          >
            SignUp
          </Link>
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="text-3xl btn rounded-full bg-gray-100 hover:bg-gray-400"
              >
                <CgProfile />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-5"
              >
                <li>
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                  <Link>SignUp</Link>
                </li>
                <li>
                  <Link>SignIn</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
