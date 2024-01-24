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
      console.log(err);
    }
  };
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="container flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-medium text-gray-400">Contact</h2>
          <h3 className="text-4xl font-semibold text-rose-600">Contact Me</h3>
        </div>
        <div className="flex gap-8 w-4/5">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center gap-4 w-1/2 sm:text-base text-sm"
          >
            <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 w-full">
              <div className="flex flex-col items-start gap-1 sm:w-1/2 w-full">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border border-gray-300 bg-white bg-opacity-5 p-2 rounded w-full text-gray-200 focus:outline-none focus:shadow-[0_0_5px_1px_rgba(225,225,225,1)]"
                />
              </div>
              <div className="flex flex-col items-start gap-1 sm:w-1/2 w-full">
                <label htmlFor="mobile">Phone</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  className="border border-gray-300 bg-white bg-opacity-5 p-2 rounded w-full text-gray-200 focus:outline-none focus:shadow-[0_0_10px_2px_rgba(225,225,225,1)]"
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
                  className="border border-gray-300 bg-white bg-opacity-5 p-2 rounded w-full text-gray-200 focus:outline-none focus:shadow-[0_0_10px_2px_rgba(225,225,225,1)]"
                />
              </div>
              <div className="flex flex-col gap-1 items-start sm:w-1/2 w-full">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="border border-gray-300 bg-white bg-opacity-5 p-2 rounded w-full text-gray-200 focus:outline-none focus:shadow-[0_0_10px_2px_rgba(225,225,225,1)]"
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
                className="border border-gray-300 bg-white bg-opacity-5 p-2 rounded w-full text-gray-200 focus:outline-none focus:shadow-[0_0_10px_2px_rgba(225,225,225,1)]"
              />
            </div>
            <input
              type="submit"
              value="SUBMIT"
              className="font-medium text-white bg-rose-600 px-2 py-1 rounded-sm cursor-pointer"
            />
          </form>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-1/2">
            <div className="flex items-center gap-2">
              <span className="text-white p-[6px] bg-rose-600 text-sm">
                <FaMapMarkerAlt />
              </span>
              <span>
                <p className="sm:text-lg text-base font-medium">Location</p>
                <p className="text-gray-200 text-sm">Bansbari, Kathmandu</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white p-[6px] bg-rose-600 text-sm">
                <IoIosCall />
              </span>
              <span>
                <p className="sm:text-lg text-base font-medium">Contact</p>
                <p className="text-gray-200 text-sm">9866295841</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white p-[6px] bg-rose-600 text-sm">
                <MdEmail />
              </span>
              <span>
                <p className="sm:text-lg text-base font-medium">Email</p>
                <p className="text-gray-200 text-sm">sangamstha775@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
