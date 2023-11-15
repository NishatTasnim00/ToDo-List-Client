import React, { useContext } from "react";
import { authContext } from "../provider/AuthProviders";
import logo from "../assets/to-do-list.png";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

const Navbar = () => {
  const { logOut } = useContext(authContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <div className="w-full h-20 bg-slate-500 flex justify-between items-center lg:px-20 px-5">
      <div className="flex">
        <Link to="/home">
          {" "}
          <img src={logo} alt="" className="h-8" />
        </Link>
        <Link to="/home">
          <h1 className="text-2xl font-black">Task Planner</h1>{" "}
        </Link>
      </div>
     <div className="lg:w-1/2 flex justify-center">
     <SearchBox />
     </div>
      <button className="btn primary-btn border-none" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
};

export default Navbar;
