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
        <div className="w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
          <a
            href="https://sarallagani.com/"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-black text-white rounded shadow-[0_0_10px_2px_rgba(225,225,225,0.3)] space-y-3"
          >
            <Image
              src="/images/work/hotel-earthlight.png"
              priority={true}
              height={2000}
              width={2000}
              alt="image"
              className="w-full h-[220px] object-cover object-top"
            />
            <h3 className="text-2xl font-semibold text-gray-100">
              Saral Lagani
            </h3>
            <p className="text-gray-300">
              Web application where you can find all
              information related to NEPSE (Nepal Stock Exchange).
            </p>
            <p className="text-red-500 text-sm font-medium">
              NextJS, NodeJS, Firebase, MySQL
            </p>
          </a>
          <a
            href="https://hotelearthlight.com/"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-black text-white rounded shadow-[0_0_10px_2px_rgba(225,225,225,0.3)] space-y-3"
          >
            <Image
              src="/images/work/hotel-earthlight.png"
              priority={true}
              height={2000}
              width={2000}
              alt="image"
              className="w-full h-[220px] object-cover object-top"
            />
            <h3 className="text-2xl font-semibold text-gray-100">
              Hotel Earth Light
            </h3>
            <p className="text-gray-300">
              Website of hotel earth light, where you will find about this hotel
              and you can book the room as well.
            </p>
            <p className="text-red-500 text-sm font-medium">
              NextJS, Python Django
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
