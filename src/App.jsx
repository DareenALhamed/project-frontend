import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
//import AfterNav from "./components/AfterNav/AfterNav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./Pages/products/Products";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import UserContexProvider from "./contex/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import Catagories from "./Pages/catagories/Catagories";
import CartContexProvider from "./contex/Cart";
import Cart from './Pages/Cart/Cart';
import CatagoryProducts from './Pages/catagories/CatagoryProducts';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/Catagories",
          element: <Catagories />,
        },

        {
          path: "/product",
          element: <Products />,
        },
        {
          path: "/categories/:id",
          element: <CatagoryProducts />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/Cart",
          element: <Cart />,
        },
        {
          path: "/Register",
          element: <Register />,
        },

        // {
        //   path: "*",
        //   element: <NotFound />,
        // },
      ],
    },
  ]);
  return (
    <>
      <UserContexProvider>
        <CartContexProvider>
          <RouterProvider router={router} />;
        </CartContexProvider>
      </UserContexProvider>

      <ToastContainer />
    </>
  );
}
