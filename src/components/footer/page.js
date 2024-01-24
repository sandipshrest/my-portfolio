import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Page = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="py-8 text-white bg-black">
      <div className="container flex items-center justify-between gap-6">
        <p>Copyright &copy; {date} Sandip Shrestha. All rights reserved. </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/sandip.shrestha.3979489"
            target="_blank"
            rel="noreferrer"
            className="sm:w-7 w-6 sm:h-7 h-6 rounded-full border flex justify-center items-center sm:text-sm text-xs bg-white bg-opacity-15 hover:bg-rose-600 hover:bg-opacity-100 hover:border-rose-600 transition-all duration-150 ease-linear"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/sandip-shrestha-01954a237/"
            target="_blank"
            rel="noreferrer"
            className="sm:w-7 w-6 sm:h-7 h-6 rounded-full border flex justify-center items-center sm:text-sm text-xs bg-white bg-opacity-15 hover:bg-rose-600 hover:bg-opacity-100 hover:border-rose-600 transition-all duration-150 ease-linear"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/kanxa_cresta?igsh=bW1ocW03OGZia29k"
            target="_blank"
            rel="noreferrer"
            className="sm:w-7 w-6 sm:h-7 h-6 rounded-full border flex justify-center items-center sm:text-sm text-xs bg-white bg-opacity-15 hover:bg-rose-600 hover:bg-opacity-100 hover:border-rose-600 transition-all duration-150 ease-linear"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCm5RbqLcy4vtZ6wlXaskiOA"
            target="_blank"
            rel="noreferrer"
            className="sm:w-7 w-6 sm:h-7 h-6 rounded-full border flex justify-center items-center sm:text-sm text-xs bg-white bg-opacity-15 hover:bg-rose-600 hover:bg-opacity-100 hover:border-rose-600 transition-all duration-150 ease-linear"
          >
            <IoLogoYoutube />
          </a>
          <a
            href="https://wa.me/9806101417"
            target="_blank"
            rel="noreferrer"
            className="sm:w-7 w-6 sm:h-7 h-6 rounded-full border flex justify-center items-center sm:text-sm text-xs bg-white bg-opacity-15 hover:bg-rose-600 hover:bg-opacity-100 hover:border-rose-600 transition-all duration-150 ease-linear"
          >
            <IoLogoWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Page;
