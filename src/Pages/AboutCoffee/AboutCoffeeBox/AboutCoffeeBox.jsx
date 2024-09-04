import React from "react";

const AboutCoffeeBox = ({ coffee }) => {
  console.log(coffee);
  const { image, title, desc } = coffee;
  return (
    <div className=" flex flex-col items-start">
      <img src={image} alt="" className="h-[50px] w-[50px]" />
      <h1 className="text-xl font-bold pFont pText mt-4 mb-1">{title}</h1>
      <p className="pText text-[16px]">{desc}</p>
    </div>
  );
};

export default AboutCoffeeBox;
