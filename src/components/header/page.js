"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { scrollToElement } from "@/utils/Scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [nav, setNav] = useState(false);
  const [activeBlock, setActiveBlock] = useState(0);

  const handleButtonClick = (index) => {
    setActiveBlock(index);
  };

  const handleScroll = () => {
    const scrollOffset = window.scrollY;
    const homeOffset = document.getElementById("home").offsetTop;
    const aboutOffset = document.getElementById("about").offsetTop;
    const skillOffset = document.getElementById("skill").offsetTop;
    const serviceOffset = document.getElementById("service").offsetTop;
    const portfolioOffset = document.getElementById("portfolio").offsetTop;
    const contactOffset = document.getElementById("contact").offsetTop;

    if (scrollOffset >= homeOffset && scrollOffset < aboutOffset) {
      setActiveBlock(0);
    } else if (scrollOffset >= aboutOffset && scrollOffset < skillOffset) {
      setActiveBlock(1);
    } else if (scrollOffset >= skillOffset && scrollOffset < serviceOffset) {
      setActiveBlock(2);
    } else if (
      scrollOffset >= serviceOffset &&
      scrollOffset < portfolioOffset
    ) {
      setActiveBlock(3);
    } else if (
      scrollOffset >= portfolioOffset &&
      scrollOffset < contactOffset
    ) {
      setActiveBlock(4);
    } else if (scrollOffset >= contactOffset) {
      setActiveBlock(5);
    } else {
      setActiveBlock(0);
    }
    setScrolled(scrollOffset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (elementId) => {
    scrollToElement(elementId);
  };

  return (
    <header
      className={`${
        scrolled ? "bg-black" : "bg-transparent"
      } fixed w-full top-0 text-white py-4 z-30 transition-all duration-100 ease-linear`}
    >
      <div className="container flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="flex sm:text-3xl text-2xl font-semibold bg-gradient-to-r from-rose-600 to-white bg-clip-text text-transparent"
          >
            SANDIP
          </Link>
        </div>
        <span onClick={() => setNav(!nav)} className="lg:hidden block text-xl">
          <GiHamburgerMenu className={`${nav ? "hidden" : "block"}`} />
          <FaXmark className={`${nav ? "block" : "hidden"}`} />
        </span>
        <nav
          className={`lg:static absolute lg:bg-transparent bg-black lg:bg-opacity-100 bg-opacity-90 top-0 lg:w-auto w-[260px] lg:h-auto h-screen lg:p-0 px-10 py-16 lg:transition-none transition-all duration-200 ease-linear ${
            nav ? "left-0" : "-left-[260px]"
          }`}
        >
          <ul className="flex lg:flex-row flex-col lg:items-center items-start gap-10 font-medium">
            <li className="lg:w-auto w-full font-medium text-gray-200">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("home");
                  setNav(false);
                  handleButtonClick(0);
                }}
                className={`cursor-pointer inline-block w-full hover:text-rose-600 transition-all duration-200 ease-linear ${
                  activeBlock === 0 ? "text-rose-600 custom-shadow" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li className="lg:w-auto w-full">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("about");
                  setNav(false);
                  handleButtonClick(1);
                }}
                className={`cursor-pointer inline-block w-full hover:text-rose-600 transition-all duration-200 ease-linear ${
                  activeBlock === 1 ? "text-rose-600 custom-shadow" : ""
                }`}
              >
                About
              </a>
            </li>
            <li className="lg:w-auto w-full">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("skill");
                  setNav(false);
                  handleButtonClick(2);
                }}
                className={`cursor-pointer inline-block w-full hover:text-rose-600 transition-all duration-200 ease-linear ${
                  activeBlock === 2 ? "text-rose-600 custom-shadow" : ""
                }`}
              >
                Skills
              </a>
            </li>
            <li className="lg:w-auto w-full">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("service");
                  setNav(false);
                  handleButtonClick(3);
                }}
                className={`cursor-pointer inline-block w-full hover:text-rose-600 transition-all duration-200 ease-linear ${
                  activeBlock === 3 ? "text-rose-600 custom-shadow" : ""
                }`}
              >
                Services
              </a>
            </li>
            <li className="lg:w-auto w-full">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("portfolio");
                  setNav(false);
                  handleButtonClick(4);
                }}
                className={`cursor-pointer inline-block w-full hover:text-rose-600 transition-all duration-200 ease-linear ${
                  activeBlock === 4 ? "text-rose-600 custom-shadow" : ""
                }`}
              >
                Portfolio
              </a>
            </li>
            <li className="lg:w-auto w-full">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("contact");
                  setNav(false);
                  handleButtonClick(5);
                }}
                className={`cursor-pointer inline-block w-full hover:text-rose-600 transition-all duration-200 ease-linear ${
                  activeBlock === 5 ? "text-rose-600 custom-shadow" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
