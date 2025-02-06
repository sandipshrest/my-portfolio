import React from "react";
import Intro from "./Intro";
import Contact from "./Contact";
import About from "./About";
import Skill from "./Skill";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Chat from "./chat/Chat";

const Main = () => {
  return (
    <>
      <Intro />
      <About />
      <Skill />
      <Service />
      <Portfolio />
      <Contact />
      <Chat />
    </>
  );
};

export default Main;
