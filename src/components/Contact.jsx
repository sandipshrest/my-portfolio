"use client";
import React, { useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.sendForm(
        "service_ke8w1dv",
        "template_17q9ihx",
        form.current,
        "-ao-363BAMAyPS5el"
      );
      if (response) {
        toast.success("Form submitted successfully.");
      }
    } catch (err) {
      toast.error("Form submission failed");
    }
  };
  return (
    <section className="md:py-24 py-20 bg-gray-950 text-white" id="contact">
      <div className="container flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-2">
          <small className="md:text-xl text-lg font-medium text-gray-400">Contact</small>
          <h2 className="md:text-4xl text-2xl font-semibold text-rose-600">Get In Touch</h2>
        </div>
        <div className="flex lg:flex-row flex-col items-center xl:gap-12 lg:gap-8 gap-14 w-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center gap-7 lg:w-1/2 w-full p-10 sm:text-base text-sm bg-black bg-opacity-30 rounded-lg shadow-[0_0_10px_2px_rgba(225,225,225,0.2)]"
          >
            <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 w-full">
              <div className="flex flex-col items-start gap-1 sm:w-1/2 w-full">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border border-gray-300 bg-white bg-opacity-5 p-2 rounded w-full text-gray-200 focus:outline-none focus:shadow-[0_0_5px_2px_rgba(225,225,225,1)] transition-all duration-100 ease-linear"
                />
              </div>
              <div className="flex flex-col items-start gap-1 sm:w-1/2 w-full">
                <label htmlFor="mobile">Phone</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  className="border border-gray-300 bg-white bg-opacity-5 p-2 rounded w-full text-gray-200 focus:outline-none focus:shadow-[0_0_5px_2px_rgba(225,225,225,1)] transition-all duration-100 ease-linear"
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 w-full">
              <div className="flex flex-col items-start gap-1 sm:w-1/2 w-full">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-gray-300 bg-white bg-opacity-5 p-2 rounded w-full text-gray-200 focus:outline-none focus:shadow-[0_0_5px_2px_rgba(225,225,225,1)] transition-all duration-100 ease-linear"
                />
              </div>
              <div className="flex flex-col gap-1 items-start sm:w-1/2 w-full">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="border border-gray-300 bg-white bg-opacity-5 p-2 rounded w-full text-gray-200 focus:outline-none focus:shadow-[0_0_5px_2px_rgba(225,225,225,1)] transition-all duration-100 ease-linear"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                rows="7"
                className="border border-gray-300 bg-white bg-opacity-5 p-2 rounded w-full text-gray-200 focus:outline-none focus:shadow-[0_0_5px_2px_rgba(225,225,225,1)] transition-all duration-100 ease-linear"
              />
            </div>
            <button
              type="submit"
              className="group inline-block relative py-1 px-2 bg-rose-600 border border-rose-600 overflow-hidden hover:text-rose-600 font-medium"
            >
              <span className="inline-block absolute w-full h-full bg-white top-0 -left-full group-hover:left-0 transition-all duration-200 ease-linear"></span>
              <p className="relative">Submit</p>
            </button>
          </form>
          <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:w-1/2 gap-5 w-full">
            <div className="flex items-center gap-2">
              <span className="text-white p-[6px] bg-rose-600 text-sm">
                <FaMapMarkerAlt />
              </span>
              <span>
                <p className="sm:text-lg text-base font-medium">Location</p>
                <p className="text-gray-200 text-sm">Basantapur, Kathmandu</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white p-[6px] bg-rose-600 text-sm">
                <IoIosCall />
              </span>
              <span>
                <p className="sm:text-lg text-base font-medium">Contact</p>
                <p className="text-gray-200 text-sm">9806101417</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white p-[6px] bg-rose-600 text-sm">
                <MdEmail />
              </span>
              <span>
                <p className="sm:text-lg text-base font-medium">Email</p>
                <p className="text-gray-200 text-sm">
                  c.restsandip123@gmail.com
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
