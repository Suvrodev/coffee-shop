import React from "react";
import logoImage from "../../../assets/logoHeader.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white p-5 md:p-10">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <img src={logoImage} alt="" className="w-[55px]" />
        <h1 className="pFont pText text-2xl">Espresso Emporium</h1>
        <p className="text-black opacity-90">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>

        <div className="flex justify-start items-center gap-2">
          <p className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#75787C">
            <FacebookIcon className="footerSocialIcon " />
          </p>
          <p className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#75787C">
            <XIcon className="footerSocialIcon " />
          </p>
          <p className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#75787C">
            <InstagramIcon className="footerSocialIcon " />
          </p>
          <p className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#75787C">
            <LinkedInIcon className="footerSocialIcon " />
          </p>
        </div>
        <h1 className="pFont pText text-2xl font-bold">Get in Touch</h1>
        <div className="flex gap-4 items-center text-black opacity-90">
          <AddIcCallIcon className="pText" />
          <p>019510912997</p>
        </div>
        <div className="flex gap-4 items-center text-black opacity-90">
          <EmailIcon className="pText" />
          <p>suvrodeb.cse@gmail.com</p>
        </div>
        <div className="flex gap-4 items-center text-black opacity-90">
          <EditLocationAltIcon className="pText" />
          <p>Khulna, Bangladesh</p>
        </div>
      </div>
      <div className=" w-full md:w-1/2  flex flex-col items-end gap-4 relative">
        <div className="">
          <h1 className="pFont pText text-2xl text-start">Connect with Us</h1>
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          className="p-2 bg-transparent border border-[#e3b577] w-full md:w-6/12"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Email"
          className="p-2 bg-transparent border border-[#e3b577] w-full md:w-6/12"
        />
        <textarea
          name=""
          id=""
          placeholder="Write Message"
          className="p-2 bg-transparent border border-[#e3b577] w-full md:w-6/12"
        ></textarea>

        <span className="p-3 bg-transparent border rounded-2xl pBorder  pFont pText text-xl">
          Send Message
        </span>
      </div>
    </div>
  );
};

export default Footer;
