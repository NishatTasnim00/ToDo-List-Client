import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TaskCard from "../../components/TaskCard";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Navbar from "../../components/Navbar";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_API_URL}/tasks`)
      .then((data) => setTasks(data.data));
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
      <Navbar />
      <div className="lg:w-1/2 mx-auto mt-20">
        <Link
          to="/addTask"
          className="text-2xl font-bold text-blue hover:underline hover:text-slate-500 "
        >
          Add Task
        </Link>

        <div className="">
          {tasks?.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              // handleUpdate={handleUpdate}
              setLoading={setLoading}
              handleDelete={handleDelete}
            ></TaskCard>
          ))}
        </div>
      </div>

      <div
        className="flex justify-end mx-28 mb-0
      "
      ></div>
    </>
  );
};

export default Home;
