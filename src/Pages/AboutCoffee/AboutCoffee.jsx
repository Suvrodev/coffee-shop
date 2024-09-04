import React from "react";
import image1 from "../../assets/About Coffee/1 1.png";
import image2 from "../../assets/About Coffee/2 1.png";
import image3 from "../../assets/About Coffee/3 1.png";
import image4 from "../../assets/About Coffee/4 1.png";
import AboutCoffeeBox from "./AboutCoffeeBox/AboutCoffeeBox";

const datas = [
  {
    id: 1,
    image: image1,
    title: "Awesome Aroma",
    desc: "You will definitely be a fan of the design & aroma of your coffee",
  },
  {
    id: 2,
    image: image2,
    title: "High Quality",
    desc: "We served the coffee to you maintaining the best quality",
  },
  {
    id: 3,
    image: image3,
    title: "Pure Grades",
    desc: "The coffee is made of the green coffee beans which you will love",
  },
  {
    id: 4,
    image: image4,
    title: "Proper Roasting",
    desc: "Your coffee is brewed by first roasting the green coffee beans",
  },
];

const AboutCoffee = () => {
  return (
    <div className="bg-[#ECEAE3] max-w-5xl mx-auto ">
      <div className="flex flex-col md:flex-row gap-4 p-5">
        {datas.map((coffee, idx) => (
          <AboutCoffeeBox key={idx} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default AboutCoffee;
