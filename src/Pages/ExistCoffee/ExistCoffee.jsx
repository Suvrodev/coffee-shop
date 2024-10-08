import React, { useContext, useEffect, useState } from "react";
import Coffee from "../coffee/Coffee";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ExistCoffee = () => {
  const { baseUrl } = useContext(AuthContext);
  const [check, setCheck] = useState(true);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/coffee`)
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, [check]);

  const handleDelete = (_id) => {
    console.log("Delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        ///Delete Start
        fetch(`${baseUrl}/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setCheck(!check);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        ///Delete End
      }
    });
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-4 my-10">
        <p className="pText">--- Sip & Savor {coffees.length} ---</p>
        <h1 className="text-2xl font-bold pText pFont">Our Popular Products</h1>
        <Link to={"/addcoffee"}>
          <button className="bg-[#E3B577] p-4 border-4 sBorder rounded-md">
            Add Coffee
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-500 p-4">
        {coffees.map((coffee) => (
          <Coffee
            key={coffee._id}
            coffee={coffee}
            handleDelete={handleDelete}
          ></Coffee>
        ))}
      </div>
    </div>
  );
};

export default ExistCoffee;
