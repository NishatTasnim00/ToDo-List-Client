import React, { useContext } from "react";
import { authContext } from "../provider/AuthProviders";
import logo from '../assets/to-do-list.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logOut } = useContext(authContext);
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
    navigate("/")
  };
  return (
    <div className="h-20 bg-slate-500 flex justify-between items-center lg:px-20 px-5">
      <div className="flex">
        <img src={logo} alt="" className="h-8"/>
        <h1 className="text-2xl font-black">Task Planner</h1>
      </div>
      <button className="btn primary-btn border-none" onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default Navbar;
