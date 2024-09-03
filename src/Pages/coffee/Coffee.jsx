import React from "react";
import "./Coffee.css";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, handleDelete }) => {
  const { _id, name, chef, detail, price, image } = coffee;
  return (
    <div className="bg-gray-400 rounded-xl shadow-sm">
      <div className="flex p-5">
        <div className="w-[30%] flex justify-center items-center">
          <img className="coffeImage" src={image} alt="" />
        </div>
        <div className="w-[60%] flex flex-col text-black justify-center items-center">
          <h1 className="font-bold">Name: {name} </h1>
          <h1 className="font-bold">Chef: {chef} </h1>
          <h1 className="font-bold">Price: {price} Taka </h1>
        </div>
        <div className=" w-[10%] flex flex-col justify-center items-center gap-2">
          <Link to={`/detail/${_id}`}>
            <button className="btn bg-[#D2B48C]">
              {" "}
              <FaEye />
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            {" "}
            <button className="btn bg-[3C393B]">
              <FaPen />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-[#EA4744]"
          >
            {" "}
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
