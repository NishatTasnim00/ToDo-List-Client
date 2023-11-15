import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import UpdateTask from "./UpdateTask";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task, handleDelete, setLoading }) => {
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  const { _id, title, assign_to, assign_by, description, status } = task;

  const handleUpdate = (data) => {
    setLoading(true)
    axiosSecure
      .put(`${import.meta.env.VITE_API_URL}/tasks/update/${_id}`, data)
     
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          navigate("/home")
          setLoading(false)
          toast.success("Updated Successfully");
        }
      });
  };

  return (
    <>
      <div className="w-full grid grid-cols-12 border rounded-2xl py-5 px-7 my-5 bg-slate-300 capitalize">
        <div className="col-span-11">
          <h1><span className="font-semibold text-xl">Title: </span>{title}</h1>
          {description &&   <p><span className="font-semibold text-lg">Description: </span>{description}</p>
}
          <p><span className="font-semibold text-lg">Assign To: </span>{assign_to}</p>
          <p><span className="font-semibold text-lg">Assign By: </span>{assign_by}</p>
         {status &&   <p  className="capitalize"><span className="font-semibold text-lg ">Status: </span> {status}</p>}

        </div>
        <div className="col-span-1 flex flex-col justify-between mr-0">
          <UpdateTask task={task} handleUpdate={handleUpdate} />

          <button onClick={() => handleDelete(_id)}>
            <RiDeleteBinLine size={20} className="hover:text-red-500 "/>
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
