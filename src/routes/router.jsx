import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Products from "../pages/products/Products";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Privateroute from "./Privateroute";
import Dashboard from "../layout/Dashboard";
import Overview from "../dashboard/Overview";
import Sellerroute from "./Sellerroute";
import Myproducts from "../seller/Myproducts";
import Addproducts from "../seller/Addproducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Privateroute>
        <Dashboard></Dashboard>
      </Privateroute>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <Sellerroute>
            <Myproducts></Myproducts>
          </Sellerroute>
        ),
      },
      {
        path: "/dashboard/addproducts",
        element: (
          <Sellerroute>
            <Addproducts></Addproducts>
          </Sellerroute>
        ),
      },
    ],
  },
]);

export default router;
