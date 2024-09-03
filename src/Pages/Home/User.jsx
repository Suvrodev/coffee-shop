import React from 'react';
import { FaAvianex, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const User = ({user,handleDelete}) => {
    const {_id,name,email}=user
    return (
        <div className='bg-orange-400 mt-5 p-2 rounded-lg flex flex-col justify-between'>
            <div>
                <h1>{name}</h1>
                <h1>{email}</h1>
            </div>
            <div className='flex justify-between'>
                <button onClick={()=>handleDelete(_id)} className='bg-red-600 p-2 rounded-lg'> <FaTrash/>  </button>
                <Link to={`/update/${_id}`}><button className='bg-green-600 p-2 rounded-lg'> <FaAvianex/>  </button></Link>
            </div>
        </div>
    );
};

export default User;