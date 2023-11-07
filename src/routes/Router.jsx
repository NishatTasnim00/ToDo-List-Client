import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/authentication/Login";
import SignUp from "../pages/authentication/SignUp";
import Home from "../pages/home/Home";
import AddTask from "../pages/addTask/AddTask";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/home",
      element: <PrivateRoute><Home /></PrivateRoute>
      ,
    },
    {
      path: "/addTask",
      element: <PrivateRoute><AddTask /></PrivateRoute>,
    },

  ]);