import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { authContext } from "../provider/AuthProviders";
import TaskCard from "./TaskCard";
import Swal from "sweetalert2";


const FilteredTasks = ({status}) => {
        const [loading, setLoading] = useState(false);
        const axiosSecure = useAxiosSecure();
        const [tasks, setTasks] = useState([]);
        useEffect(() => {
          axiosSecure
            .get(`${import.meta.env.VITE_API_URL}/tasks/${status}`)
            .then((data) => setTasks(data.data.reverse()));
          setLoading(false);
        }, [axiosSecure, loading]);
      
        const handleDelete = (_id) => {
          console.log(_id);
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "accent",
            cancelButtonColor: "#ec4899",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure
                .delete(`${import.meta.env.VITE_API_URL}/tasks/${_id}`)
                .then((data) => {
                  console.log(data.data);
                  console.log(data.data.deletedCount);
                  if (data.data.deletedCount > 0) {
                    toast.success("Deleted!");
                  }
                  const remaining = tasks.filter((t) => t._id !== _id);
                  setTasks(remaining);
                });
            }
          });
        };
      
        return (
          <>
      
            <div className="lg: mx-auto mt-0">
            
      
              <div className="">
                {tasks?.map((task) => (
                  <TaskCard
                    key={task._id}
                    task={task}
                    setLoading={setLoading}
                    handleDelete={handleDelete}
                  ></TaskCard>
                ))}
              </div>
            </div>
      
            <div
              className="flex justify-end mx-28 mb-0"
            ></div>
          </>
        );
      };

export default FilteredTasks;
