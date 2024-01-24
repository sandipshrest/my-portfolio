import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedText = () => {
  useEffect(() => {
    const options = {
      strings: ["UI/UX Designer", "Frontend Developer", "Backend Developer"],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
    };

    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typed-text text-rose-600"></span>;
};

export default TypedText;
