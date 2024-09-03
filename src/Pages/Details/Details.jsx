import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Details = () => {
  const { baseUrl } = useContext(AuthContext);
  const { id } = useParams();
  const [coffee, setCoffee] = useState("");

  useEffect(() => {
    fetch(`${baseUrl}/coffee/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, []);
  console.log(coffee);
  const { category, chef, detail, image, name, price, suplier, taste, _id } =
    coffee;

  return (
    <div className="bg-white p-0 md:p-10">
      <Link to={"/"}>
        <h1 className="text-black mb-5 flex items-center gap-2 cursor-pointer">
          {" "}
          <FaArrowLeft /> Back to Home
        </h1>
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img src={image} alt="" className="w-[450px] h-auto" />
        </div>
        <div className="w-full md:w-1/2 flex items-center md:items-start  justify-center flex-col">
          <h1 className="text-xl pFont pText">{name}</h1>
          <h1>
            <span className="font-bold pText">Name: </span>{" "}
            <span className="text-black opacity-90">{name}</span>{" "}
          </h1>
          <h1>
            <span className="font-bold pText">Chef: </span>{" "}
            <span className="text-black opacity-90">{chef}</span>{" "}
          </h1>
          <h1>
            <span className="font-bold pText">Supplier: </span>{" "}
            <span className="text-black opacity-90">{suplier}</span>{" "}
          </h1>
          <h1>
            <span className="font-bold pText">Taste: </span>{" "}
            <span className="text-black opacity-90">{taste}</span>{" "}
          </h1>
          <h1>
            <span className="font-bold pText">Category: </span>{" "}
            <span className="text-black opacity-90">{category}</span>{" "}
          </h1>
          <h1>
            <span className="font-bold pText">Price: </span>{" "}
            <span className="text-black opacity-90">{price}</span>{" "}
          </h1>
          <h1>
            <span className="font-bold pText">Detail: </span>{" "}
            <span className="text-black opacity-90">{detail}</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
