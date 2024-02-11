"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import ProgressBar from "@ramonak/react-progress-bar";
import SkillData from "@/data/SkillData";

const Skill = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="md:py-24 py-20 text-white bg-gray-900" id="skill">
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <small className="md:text-xl text-lg font-medium text-gray-400">Skill</small>
          <h2 className="md:text-4xl text-2xl font-semibold text-rose-600">Expertise In</h2>
        </div>
        <p className="sm:text-base text-sm">
          I've been engaged in development for more than 1 year. Through out the years I've learned & gained some technology skills from many field. Here are some technology stack I expertised in: 
        </p>
        <div className="w-full grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
          {SkillData.map((item, id) => (
            <div key={id} className="flex flex-col items-start gap-1">
              <div className="w-full flex items-center gap-4 justify-between">
                <h3 className="sm:text-lg text-sm font-medium text-gray-100">
                  {item.title}
                </h3>
                <p className="sm:text-base text-sm">{item.level}%</p>
              </div>
              <div ref={ref} className="w-full">
                {inView && (
                  <ProgressBar
                    completed={parseInt(item.level)}
                    maxCompleted={100}
                    animateOnRender={true}
                    bgColor="#C01D48"
                    baseBgColor="white"
                    height="8px"
                    isLabelVisible={false}
                    borderRadius="1px"
                    transitionDuration="1s"
                    transitionTimingFunction="linear"
                    className="w-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
