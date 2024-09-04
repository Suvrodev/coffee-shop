import React from "react";
import "./Coffee.css";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, handleDelete }) => {
  const { _id, name, chef, detail, price, image } = coffee;
  return (
    <div className="bg-gray-400 rounded-xl shadow-sm">
      <div className="flex p-2">
        <div className="w-[30%] flex justify-center items-center">
          <img className="coffeImage" src={image} alt="" />
        </div>
        <div className="w-[70%] flex flex-col md:flex-row gap-8 md:gap-0 ">
          <div className=" w-full md:w-[90%] flex flex-col text-black justify-center items-center">
            <h1>
              <span className="font-bold">Name</span> <span>{name}</span>
            </h1>
            <h1>
              <span className="font-bold">Chef: </span> <span>{chef}</span>
            </h1>
            <h1>
              <span className="font-bold">Price: </span> <span>{price}</span>
            </h1>
          </div>
          <div className="w-full md:w-[10%] flex flex-row md:flex-col justify-center items-center gap-2">
            <Link to={`/detail/${_id}`}>
              <button className="btn-sm outline-none border-none md:btn pColor hover rounded-md ">
                {" "}
                <FaEye className="white" />
              </button>
            </Link>
            <Link to={`/update/${_id}`}>
              {" "}
              <button className=" btn-sm bg-[#15191E] outline-none border-none md:btn   rounded-md ">
                <FaPen />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn-sm tomatoBg outline-none border-none md:btn   rounded-md md:tomatoBg "
            >
              {" "}
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
