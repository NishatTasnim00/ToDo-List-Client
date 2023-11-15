import React, { Children, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import SearchBox from "../../components/SearchBox";
import Dashboard from "../../components/DashBoard/Dashboard";



const Home = ({ Children }) => {
 
  return (
    <>
      <Navbar />
      
      <div className=" grid grid-cols-12">
        <div className="col-span-2 bg-slate-500">
          <Dashboard />
        </div>
        <div className="col-span-10">
          
          
            <Outlet /></div>
      </div>
    </>
  );
};

export default Home;
