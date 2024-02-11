"use client";
import React from "react";
import ParticleAnimation from "./ParticleAnimation";
import TypedText from "./TypedText";
import Image from "next/image";
import { scrollToElement } from "@/utils/Scroll";

const Intro = () => {
  return (
    <section className="md:py-32 py-28 relative bg-gray-900 text-white" id="home">
      <ParticleAnimation />
      <div className="container flex lg:flex-row flex-col justify-between items-center lg:gap-10 gap-14 relative">
        <div className="flex flex-col items-start lg:w-2/3 w-full gap-6">
          <div className="flex flex-col items-start gap-1">
            <small className="text-base text-gray-200 font-medium">
              Hello I&apos;m
            </small>
            <h1 className="xl:text-7xl md:text-6xl sm:text-4xl text-3xl font-bold">
              Sandip Shrestha
            </h1>
            <span className="xl:text-6xl md:text-5xl sm:text-3xl text-2xl font-bold">
              <TypedText />
            </span>
          </div>
          <p className="sm:text-base text-sm">
            I&apos;m a passionate UI/UX designer, Frontend Developer & Backend
            Developer with a mission to create delightful and intuitive digital
            experiences. With a strong foundation in design principles and a
            keen eye for detail, I specialize in translating complex ideas into
            user-friendly interfaces that captivate and engage.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToElement("contact")}
              className="group inline-block relative py-1 px-2 bg-rose-600 border border-rose-600 overflow-hidden hover:text-rose-600 font-medium"
            >
              <span className="inline-block absolute w-full h-full bg-white top-0 -left-full group-hover:left-0 transition-all duration-200 ease-linear"></span>
              <p className="relative">Hire Me</p>
            </button>
            <a
              href="https://github.com/kanxa12345"
              target="_blank"
              rel="noreferrer"
              className="group inline-block relative py-1 px-2 bg-gradient-to-r from-black to-gray-950 border border-black overflow-hidden hover:text-black font-medium"
            >
              <span className="inline-block absolute w-full h-full bg-white top-0 -right-full group-hover:right-0 transition-all duration-200 ease-linear"></span>
              <p className="relative">Github</p>
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-2/3 w-[90%]">
          <Image
            src="/images/image.jpeg"
            height={2000}
            width={2000}
            alt="profile"
            className="w-full aspect-square rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
