import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Products from "../pages/products/Products";
import Login from "../authentication/Login";
import Register from "../authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Register></Register>
        },
    ]
  },
]);

export default router;
