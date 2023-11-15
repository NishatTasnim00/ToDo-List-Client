import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-[calc(100vh-160px)]
    ">
      <ul className="mt-20 ml-20 font-medium text-lg space-y-7">
        <li><NavLink to="/home/AllTasks" className="text-li">All Tasks</NavLink></li>
        <li><NavLink to="/home/addTasks" className="text-li">Add New Tasks</NavLink></li>
        {/* <li>My Tasks</li> */}
        <li></li>
        <li></li>
      </ul>
    
    </div>
  );
};

export default Dashboard;
