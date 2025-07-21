import Home from "@/pages/Home";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import { Navigate } from "react-router-dom";
export const ROUTES = [
    {
        path: "/",
        element: <Navigate to="/login" replace />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    
];
