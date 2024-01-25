import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-2">
          <small className="text-xl font-medium text-gray-400">Portfolio</small>
          <h2 className="text-4xl font-semibold text-rose-600">
            Work I've Done
          </h2>
        </div>
        <div className="w-full grid grid-cols-4 gap-6">
          <a
            href="https://hotelearthlight.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block relative after:absolute after:bg-black after:w-full after:h-full after:inset-0 after:content-['Click_Here'] after:text-lg after:font-semibold after:flex after:justify-center after:items-center after:opacity-0 hover:after:opacity-100 hover:after:bg-opacity-70 after:transition-all after:duration-100 after:ease-linear"
          >
            <Image
              src="/images/work/hotel-earthlight.png"
              priority={true}
              height={2000}
              width={2000}
              className="w-full h-[350px] object-cover object-top"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
