import ServiceData from "@/data/ServiceData";
import React from "react";

const Service = () => {
  return (
    <section className="md:py-24 py-20 bg-black text-white" id="service">
      <div className="container flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-2">
          <small className="md:text-xl text-lg font-medium text-gray-400">Service</small>
          <h2 className="md:text-4xl text-2xl font-semibold text-rose-600">What I Do</h2>
        </div>
        <div className="w-full grid 2xl:grid-cols-3 md:grid-cols-2 gap-10">
          {ServiceData.map((item, id) => (
            <div
              key={id}
              className="flex flex-col items-center gap-8 px-5 py-7 bg-gray-950 bg-opacity-80 rounded-lg shadow-[0_0_10px_2px_rgba(225,225,225,0.3)]"
            >
              <span className="md:text-6xl text-4xl text-gray-300 text-center">{item.icon}</span>
              <h3 className="sm:text-2xl text-xl font-bold text-rose-700 text-center">{item.title}</h3>
              <p className="text-center text-gray-300 lg:text-base text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
