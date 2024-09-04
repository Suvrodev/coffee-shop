import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import User from "./User";
import Banner from "../Banner/Banner";
import ExistCoffee from "../ExistCoffee/ExistCoffee";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AboutCoffee from "../AboutCoffee/AboutCoffee";

const Home = () => {
  const { baseUrl } = useContext(AuthContext);
  const [check, setcheck] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [check]);
  // console.log(users);

  return (
    <div className="bg-white">
      <Banner></Banner>
      <AboutCoffee />
      <ExistCoffee></ExistCoffee>
    </div>
  );
};

export default Home;
