import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../app/layouts/AuthLayout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import MainLayout from "../app/layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Shop from "../pages/shop/Shop";
import ProtectedRoutes from "./protected/ProtectedRoutes";
import PublicRoutes from "./public/PublicRoutes";

import { Navigate } from "react-router";
const AppRoutes = () => {
  const router = createBrowserRouter([
   {
    element:<PublicRoutes/>,
    children:[
       {
      element: <AuthLayout/>,
      children: [
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "register",
          element: <Register/>
        },
      ],
    },
    ]
   },


   {
    element:<ProtectedRoutes/>,
    children:[
       {
      element:<MainLayout/>,
      children:[
        {
  path: "/",
  element: <Navigate to="home" replace />,
},
        {path:"home",
          element:<Home/>
        },{
          path:"about",
          element:<About/>
        },{
          path:"shop",
          element:<Shop/>
        }

      ]
    }
    ]
   }
  ]);


  return <RouterProvider router={router} />;
};

export default AppRoutes;