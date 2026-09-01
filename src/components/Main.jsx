"use client";
import React from "react";
import Intro from "./Intro";
import Contact from "./Contact";
import About from "./About";
import Skill from "./Skill";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Chat, { ChatButton } from "./chat/Chat";
import ErrorBoundary from "./ErrorBoundary";

const chatFallback = (
  <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 9999 }}>
    <ChatButton
      onClick={() => window.location.reload()}
      isOpen={false}
      ariaLabel="Reload chat with Sandip's AI Assistant"
    />
  </div>
);

const Main = () => {
  return (
    <>
      <Intro />
      <About />
      <Skill />
      <Service />
      <Portfolio />
      <Contact />
      <ErrorBoundary fallback={chatFallback}>
        <Chat />
      </ErrorBoundary>
    </>
  );
};

export default Main;
