"use client"
import React from "react";
import { useInView } from "react-intersection-observer";
import ProgressBar from "@ramonak/react-progress-bar";
import SkillData from "@/data/SkillData";

const Skill = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="py-24 text-white bg-gray-900" id="skill">
      <div className="container flex items-center gap-8">
        <div className="w-1/2"></div>
        <div className="w-1/2 flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-2">
            <small className="text-xl font-medium text-gray-400">Skill</small>
            <h2 className="text-4xl font-semibold text-rose-600">My Skills</h2>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus reprehenderit quae, voluptatum commodi omnis odio alias
            perferendis non, ipsa architecto accusamus minima laudantium unde
            autem nostrum enim eveniet molestiae ad, illo facilis et iure animi?
            Modi ipsa quam molestias quos!
          </p>
          <div className="w-full grid sm:grid-cols-2 sm:gap-6 gap-4">
            {SkillData.map((item, id) => (
              <div key={id} className="flex flex-col items-start gap-1">
                <h3 className="text-lg font-medium text-gray-100">
                  {item.title}
                </h3>
                <div ref={ref} className="w-full">
                  {inView && (
                    <ProgressBar
                      completed={parseInt(item.level)}
                      maxCompleted={100}
                      animateOnRender={true}
                      bgColor="#C01D48"
                      baseBgColor="white"
                      height="9px"
                      labelSize="9px"
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
      </div>
    </section>
  );
};

export default Skill;
