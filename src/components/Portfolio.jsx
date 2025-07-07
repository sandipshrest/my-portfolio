import Image from "next/image";
import React from "react";

const Portfolio = () => {
  const projects = [
    {
      projectName: "Share Sanskar",
      description:
        "A website providing comprehensive financial and share market information, analysis, news, floor sheets, and company details.",
      image: "/images/share-sanskar.png",
      link: "https://sharesanskar.com/",
      techStack: "NextJS, NodeJS, Firebase, MySQL",
    },
    {
      projectName: "Portfolio Nepal",
      description:
        "A web application designed to manage stock portfolios, perform stock market analysis, conduct technical analysis, and more.",
      image: "/images/portfolio-nepal.png",
      link: "https://portfolionepal.com/",
      techStack: "NextJS, NodeJS, Firebase, MySQL",
    },
  ];

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
          {projects?.map((project, id) => (
            <a
              key={id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-black text-white rounded shadow-[0_0_10px_2px_rgba(225,225,225,0.3)] space-y-3"
            >
              <Image
                src={project.image}
                priority={true}
                height={2000}
                width={2000}
                alt="image"
                className="w-full h-[220px] object-cover object-top"
              />
              <h3 className="text-2xl font-semibold text-gray-100">
                {project.projectName}
              </h3>
              <p className="text-gray-300">{project.description}</p>
              <p className="text-red-500 text-sm font-medium">
                {project.techStack}
              </p>
            </a>
          ))}
        </div>
        <p className="text-lg font-medium text-gray-100">
          More projects on my{" "}
          <a
            href="https://github.com/sandipshrest"
            target="_blank"
            rel="noreferrer"
            className="underline text-purple-500"
          >
            Github
          </a>
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
