import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import User from './User';
import Banner from '../Banner/Banner';
import ExistCoffee from '../ExistCoffee/ExistCoffee';

const Home = () => {

    const [check,setcheck]=useState(true)
    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[check])
    // console.log(users);




    return (
        <div>
           <Banner></Banner>
           <ExistCoffee></ExistCoffee>
        </div>
    );
};

export default Home;