import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className="md:py-24 py-20 bg-gray-900 text-white" id="portfolio">
      <div className="container flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-2">
          <small className="md:text-xl text-lg font-medium text-gray-400">
            Portfolio
          </small>
          <h2 className="md:text-4xl text-2xl font-semibold text-rose-600">
            Work I&apos;ve Done
          </h2>
        </div>
        <div className="w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
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
              alt="image"
              className="w-full h-[350px] object-cover object-top"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
