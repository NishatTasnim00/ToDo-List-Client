import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../../provider/AuthProviders";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Navbar from "../../components/Navbar";

const AddTask = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axiosSecure
      .post(`${import.meta.env.VITE_API_URL}/tasks`, data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Tasks Added");
        }
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
   <>
   
   <h1 className="text-center text-2xl font-bold my-20">Add New Task</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-1/2 mx-auto border rounded-lg"
      >
        <div className="w-full px-5">
          <label className="label">
            <span className="text-add-class">Task Title</span>
          </label>
          <input
            className="input w-full capitalize"
            {...register("title")}
            placeholder="Task Title"
            required
          />
        </div>

        <div className="w-full px-5 hidden">
          <label className="label">
            <span className=""></span>
          </label>
          <input {...register("assign_by")} value={user.displayName} required />
        </div>
        <div className="w-full px-5 hidden">
          <label className="label">
            <span className=""></span>
          </label>
          <input {...register("status")} value="pending" required />
        </div>

        <div className="w-full px-5">
          <label className="label">
            <span className="">Assign to</span>
          </label>
          <input
            className="input w-full"
            {...register("assign_to")}
            placeholder="Assign to"
            required
          />
        </div>

        <div className="w-full px-5">
          <label className="label">
            <span className="">Task Description</span>
          </label>
          <textarea
            className="input w-full min-h-[100px]"
            {...register("description")}
            placeholder="Task Description"
          />
        </div>

        <div className="w-full p-5 ">
          <button type="submit" className="btn btn-block primary-btn">
            Add
          </button>
        </div>
      </form>
</>
  );
};

export default AddTask;
