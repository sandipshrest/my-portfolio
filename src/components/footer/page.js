import React from "react";
import SocialMediaData from "@/data/SocialmediaData";

const Page = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="py-8 text-white bg-black">
      <div className="container flex sm:flex-row flex-col sm:items-center justify-between gap-6">
        <p className="sm:text-base text-sm">
          Copyright &copy; {date} Sandip Shrestha. All rights reserved.{" "}
        </p>
        <div className="flex items-center gap-4">
          {SocialMediaData?.map((item, id) => (
            <a
              key={id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="sm:w-7 w-6 sm:h-7 h-6 rounded-full border flex justify-center items-center sm:text-sm text-xs bg-white bg-opacity-15 hover:bg-rose-600 hover:bg-opacity-100 hover:border-rose-600 transition-all duration-150 ease-linear"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Page;
