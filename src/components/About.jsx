import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="md:py-24 py-20 bg-gray-950 text-white" id="about">
      <div className="container flex lg:flex-row flex-col items-center 2xl:gap-12 lg:gap-8 gap-12">
        <div className="lg:w-[35%] sm:w-4/5 w-full lg:order-none order-1">
          <div className="w-full 2xl:p-14 sm:p-10 p-6 bg-black bg-opacity-70 rounded-lg shadow-[0_0_10px_2px_rgba(225,225,225,0.2)]">
            <Image
              src="/images/profile.jpeg"
              priority={true}
              height={2000}
              width={2000}
              alt="profile"
              className="w-full sm:h-[450px] h-[400px] object-cover"
            />
          </div>
        </div>
        <div className="lg:w-[65%] w-full flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-2">
            <small className="md:text-xl text-lg font-medium text-gray-400">About</small>
            <h2 className="md:text-4xl text-2xl font-semibold text-rose-600">
              Know About Me
            </h2>
          </div>
          <div className="flex flex-col items-start gap-2 text-gray-300 sm:text-base text-sm">
            <p>
              Hi there! I&apos;m Sandip Shrestha, a versatile web developer with a
              passion for crafting engaging and dynamic digital experiences.
              Proficient in front-end technologies, I excel in HTML, CSS/SCSS,
              and JavaScript, bringing designs to life with precision and
              creativity. I&apos;m adept at using frameworks like ReactJS to build
              interactive user interfaces, while also leveraging
              TailwindCSS/Bootstrap for efficient styling. With a keen eye for
              design, I utilize tools like Figma to conceptualize and refine
              user interfaces, ensuring a seamless user experience across
              platforms.
            </p>
            <p>
              On the back-end, I have experience with NodeJS and ExpressJS,
              enabling me to develop robust server-side applications. While my
              skills in MongoDB provide a foundation for working with databases
              and managing data effectively. Whether it&apos;s crafting sleek
              front-end designs or architecting scalable back-end solutions, I
              thrive on turning ideas into reality and delivering impactful
              digital solutions.
            </p>
            <div className="flex sm:flex-row flex-col sm:gap-14 gap-2 mt-3">
              <div className="flex flex-col items-start gap-2">
                <span className="flex items-center gap-1">
                  <p className="font-bold text-white">Phone:</p>
                  9806101417
                </span>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-white">Address:</p>
                  Gorkha, Nepal
                </span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="flex items-center gap-1">
                  <p className="font-bold text-white">Email:</p>
                  c.restsandip123@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <p className="font-bold text-white">Freelance:</p>
                  Available
                </span>
              </div>
            </div>
          </div>
          <a
            href="/images/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-block relative py-1 px-2 bg-rose-600 border border-rose-600 overflow-hidden hover:text-rose-600 font-medium"
          >
            <span className="inline-block absolute w-full h-full bg-white top-0 -left-full group-hover:left-0 transition-all duration-200 ease-linear"></span>
            <p className="relative">Download CV</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
