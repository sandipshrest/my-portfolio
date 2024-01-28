import ServiceData from "@/data/ServiceData";
import React from "react";

const Service = () => {
  return (
    <section className="py-24 bg-black text-white" id="service">
      <div className="container flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-2">
          <small className="text-xl font-medium text-gray-400">Service</small>
          <h2 className="text-4xl font-semibold text-rose-600">My Services</h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-10">
          {ServiceData.map((item, id) => (
            <div
              key={id}
              className="flex flex-col items-center gap-8 px-5 py-8 bg-gray-950 bg-opacity-80 rounded-lg shadow-[0_0_10px_2px_rgba(225,225,225,0.3)]"
            >
              <span className="text-6xl text-gray-300">{item.icon}</span>
              <h3 className="text-2xl font-bold text-rose-700">{item.title}</h3>
              <p className="text-center text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
