import React from "react";
import "./Header.css";
import logo from "../../../assets/logoHeader.png";

const Header = () => {
  return (
    <div className="header flex justify-center">
      <div className="flex items-center gap-2">
        <img className="w-[75px] h-[90px]" src={logo} alt="" />
        <h1 className="text-2xl font-bold pFont">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Header;
