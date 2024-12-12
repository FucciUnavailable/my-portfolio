import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Avid Learner",
          "Software Developer",
          "Full-Stack",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Father to two cats",
          "One of them is Orange"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
