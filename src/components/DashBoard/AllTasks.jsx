import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import TaskCard from "../TaskCard";
import FilteredTasks from "../FilteredTasks";



const AllTasks = () => {
 

  return (
    <div className="lg:px-40">
   <h1 className="text-center text-2xl font-bold my-10">All Tasks</h1>
    <FilteredTasks status="all"/>
    </div>
  );
};

export default AllTasks;
