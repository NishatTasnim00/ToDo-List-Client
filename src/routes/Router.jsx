import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/authentication/Login";
import SignUp from "../pages/authentication/SignUp";
import Home from "../pages/home/Home";
import AddTask from "../pages/addTask/AddTask";
import PrivateRoute from "./PrivateRoute";
import AllTasks from "../components/DashBoard/AllTasks";
import Tasks from "../components/DashBoard/Tasks";
import Search from "../components/DashBoard/Search";

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
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/home",
        element: (
       
            <Tasks />
        
        ),
      },
      {
        path: "/home/allTasks",
        element: (
          <PrivateRoute>
            <AllTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/home/addTasks",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/home/search",
        element: (
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        ),
      },
    ],
  },
  
]);
