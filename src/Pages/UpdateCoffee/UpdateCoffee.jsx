import React, { useContext, useEffect, useState } from "react";
import "./UpdateCoffee.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const image_Hosting_Token = import.meta.env.VITE_IMAGE_TOKEN;
const UpdateCoffee = () => {
  const { baseUrl } = useContext(AuthContext);
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${image_Hosting_Token}`;
  //console.log("Image Hosting URL: ",imageHostingUrl);
  const { id } = useParams();
  const [coffee, setCoffee] = useState("");

  useEffect(() => {
    fetch(`${baseUrl}/coffee/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, []);

  // console.log(coffee);

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    console.log("Update Coffee");
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const suplier = form.suplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const detail = form.detail.value;
    const price = form.price.value;
    const photo = form.photo.files[0];

    let updateCoffee;
    console.log(coffee);

    ///Image Upload Hoy ne
    if (!photo) {
      updateCoffee = {
        name,
        chef,
        suplier,
        taste,
        category,
        detail,
        price: parseFloat(price),
        image: coffee.image,
      };
      console.log("Photo Nai");
      console.log(updateCoffee);

      ////Update Coffee Start
      fetch(`${baseUrl}/coffee/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateCoffee),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Coffee Updated Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      ////Update Coffee End
    } else {
      console.log("Image Ache");
      const formData = new FormData();
      formData.append("image", photo);
      fetch(imageHostingUrl, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imageResponse) => {
          const uploadedImage = imageResponse.data.display_url;
          console.log("ki Image: ", uploadedImage);
          console.log(uploadedImage);

          /////Check Update Coffe With Uploading Image
          updateCoffee = {
            name,
            chef,
            suplier,
            taste,
            category,
            detail,
            price: parseFloat(price),
            image: uploadedImage,
          };

          ////Update Coffee Start
          fetch(`${baseUrl}/coffee/${id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateCoffee),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Coffee Updated Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          ////Update Coffee End
        });
    }

    // fetch(`http://localhost:5000/coffee/${id}`,{
    //     method: 'PATCH',
    //     headers: {
    //         'content-type':'application/json'
    //     },
    //     body: JSON.stringify(updateCoffee)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data);
    // })
  };
  return (
    <div className="bg-white p-0 md:p-10">
      <Link to={"/"}>
        <h1 className="text-black mb-5 flex items-center gap-2 cursor-pointer">
          {" "}
          <FaArrowLeft /> Back to Home
        </h1>
      </Link>
      <div className="bg-[#F4F3F0] w-full md:w-10/12 mx-auto rounded-xl p-5">
        <h1 className="pText pFont text-2xl text-center p-2 font-bold rounded-md">
          Update Existing Coffee Details
        </h1>

        <p className="text-black text-center my-2 w-full md:w-10/12 mx-auto opacity-75">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <div className="flex justify-center items-center ">
          <img className="updateImage" src={coffee.image} alt="" />
        </div>

        <form onSubmit={handleUpdateCoffee} className="p-5">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Coffee name
                </span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={coffee.name}
                placeholder="Coffee Name"
                className="input input-bordered w-full max-w-xs bg-transparent pBorder border-2 pText"
              />
            </div>

            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text text-black font-bold">Checf</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={coffee.chef}
                placeholder="Chef Name"
                className="input input-bordered w-full max-w-xs bg-transparent pBorder border-2 pText"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Supplier
                </span>
              </label>
              <input
                type="text"
                name="suplier"
                defaultValue={coffee.suplier}
                placeholder="Supplier"
                className="input input-bordered w-full max-w-xs bg-transparent pBorder border-2 pText"
              />
            </div>

            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text text-black font-bold">Teste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={coffee.taste}
                placeholder="Teste"
                className="input input-bordered w-full max-w-xs bg-transparent pBorder border-2 pText"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Category
                </span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={coffee.category}
                placeholder="Category"
                className="input input-bordered w-full max-w-xs bg-transparent pBorder border-2 pText"
              />
            </div>

            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text text-black font-bold">Details</span>
              </label>
              <input
                type="text"
                name="detail"
                defaultValue={coffee.detail}
                placeholder="Details"
                className="input input-bordered w-full max-w-xs bg-transparent pBorder border-2 pText"
              />
            </div>
          </div>

          <div className="flex gap-4 justify-between items-center">
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text text-black font-bold  ">Price</span>
              </label>
              <input
                type="number"
                name="price"
                defaultValue={coffee.price}
                placeholder="Price"
                className="input input-bordered w-full max-w-xs bg-transparent pBorder border-2 pText"
              />
            </div>
          </div>

          <div className="">
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text text-black font-bold">Photo</span>
              </label>
              <input
                type="file"
                name="photo"
                className="file-input w-full bg-transparent pBorder border-2 pText "
              />
            </div>
          </div>
          <div className=" mt-6">
            <button className="py-3 rounded-xl pColor block w-full pColor pFont">
              Update Coffiee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
