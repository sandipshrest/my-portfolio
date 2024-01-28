'use client'
import React from "react";
import { scrollToElement } from "@/utils/Scroll";

const Page = () => {
  return (
    <header className="py-4 bg-gray-950 text-white sticky top-0 z-20">
      <div className="container flex justify-between items-center">
        <a href="/" className="text-4xl font-semibold">
          SANDIP
        </a>
        <nav>
          <ul className="flex items-center gap-10 font-medium text-gray-200">
            <li>
              <button onClick={() => scrollToElement("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToElement("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToElement("skill")}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollToElement("service")}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToElement("portfolio")}>Portfolio</button>
            </li>
            <li>
              <button onClick={() => scrollToElement("contact")}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Page;
