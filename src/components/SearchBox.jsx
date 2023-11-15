import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Search from "./DashBoard/Search";

const SearchBox = () => {
  const [searchText, setSearchText] = useState(null);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  // console.log(tasks);
  const axiosSecure = useAxiosSecure();
  const handleSearch = () => {
    axiosSecure
      .get(`${import.meta.env.VITE_API_URL}/search/${searchText}`)
      .then((data) => {
        setTasks(data.data);
        navigate("/home/search");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="relative">
      <div className="join">
        <input
          className="input input-bordered join-item"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Text"
        />
        <button
          className="btn join-item rounded-r-full primary-btn"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div
      // className="hidden"
        className={window.location.pathname === "/home/search" ? "top-28 absolute w-[700px] -left-40" : "hidden"}
      >
        <Search tasks={tasks} />
      </div>
    </div>
  );
};

export default SearchBox;
