import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUser(data);
        }
      });
  }, []);

  const {_id,name,email}=user;
//   console.log("Kuchupu: ",_id);
  
  
  const handleUpdateUser=(event)=>{
    event.preventDefault()
    const Form=event.target;
    const name=Form.name.value;
    const email=Form.email.value;
    const user={name,email}
    fetch(`http://localhost:5000/user/${_id}`,{
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Updated Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  return (
    <div>
      <div className="bg-gray-400 w-8/12 mx-auto p-5 rounded-md">
        <h1 className="bg-green-600 text-center p-2 rounded-md font-bold">
          Update
        </h1>
        <p className="bg-orange-400 p-2 mt-2 rounded-md text-center">ID: {_id} </p>
        <form onSubmit={handleUpdateUser}>
          <input
            className="m-4 rounded-md p-2 bg-white text-black"
            type="text"
            name="name"
            id=""
            placeholder="Name"
            defaultValue={name}
          />
          <br />
          <input
            className="m-4 rounded-md p-2 bg-white text-black"
            type="email"
            name="email"
            id=""
            placeholder="Email"
            defaultValue={email}
          />
          <br />
          <input className="m-4 btn btn-primary" type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default Details;
