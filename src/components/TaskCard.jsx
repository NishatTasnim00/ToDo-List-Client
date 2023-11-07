import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import UpdateTask from "./UpdateTask";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task, handleDelete, setLoading }) => {
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  const { _id, title, assign_to, assign_by, description } = task;

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
      <div className="grid grid-cols-12 border rounded-2xl py-5 px-10 my-5 bg-slate-300">
        <div className="col-span-10">
          <h1><span className="font-semibold text-xl">Title: </span>{title}</h1>
          {description &&   <p><span className="font-semibold text-lg">Description: </span>{description}</p>
}
          <p><span className="font-semibold text-lg">Assign To: </span>{assign_to}</p>
          <p><span className="font-semibold text-lg">Assign By: </span>{assign_by}</p>
        </div>
        <div className="col-span-2 flex justify-between">
          <UpdateTask task={task} handleUpdate={handleUpdate} />

          <button onClick={() => handleDelete(_id)}>
            <RiDeleteBinLine size={30} className="hover:text-red-500 "/>
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
