import React from "react";

const Page = () => {
  return (
    <header className="py-4 bg-gray-950 text-white sticky top-0 z-20">
      <div className="container flex justify-between items-center">
        <a href="#" className="text-4xl font-semibold">
          SANDIP
        </a>
        <nav>
          <ul className="flex items-center gap-10 font-medium text-gray-200">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Page;
