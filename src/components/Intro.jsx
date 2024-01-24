"use client";
import React from "react";
import ParticleAnimation from "./ParticleAnimation";
import TypedText from "./TypedText";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="py-32 relative bg-gray-900 text-white">
      <ParticleAnimation />
      <div className="container flex items-center gap-10 relative">
        <div className="flex flex-col items-start w-1/2 gap-6">
          <div className="flex flex-col items-start gap-1">
            <small className="text-base text-gray-200 font-medium">
              Hello I'm
            </small>
            <h1 className="text-7xl font-bold">Sandip Shrestha</h1>
            <span className="text-6xl font-bold">
              <TypedText />
            </span>
          </div>
          <p>
            I'm a passionate UI/UX designer, Frontend Developer & Backend
            Developer with a mission to create delightful and intuitive digital
            experiences. With a strong foundation in design principles and a
            keen eye for detail, I specialize in translating complex ideas into
            user-friendly interfaces that captivate and engage.
          </p>
          <a href="#" className="py-1 px-2 bg-rose-600">
            Hire Me
          </a>
        </div>
        <div className="w-1/2">
          <Image
            src="/images/hacker.webp"
            height={2000}
            width={2000}
            alt="profile"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
