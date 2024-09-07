import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "Freelancer", "Front-End Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 55,
      }}
    />
  );
}
