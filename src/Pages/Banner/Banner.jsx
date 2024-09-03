import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner flex justify-center items-center">
      <div className="w-[60%]"></div>
      <div className="">
        <h1 className="text-2xl pFont">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="my-5">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="btn pColor pFont">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
