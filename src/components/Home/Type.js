import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Father to two cats",
          "One of them is <span style='color: gray;'>Black</span>",
          "I trained him to play dead",
          "He's better at it than I expected",
          "The other cat is an aspiring <span style='color: orange;'>MMA Fighter</span>",
          "Currently practicing on my leg",
          "Excuse me while I tap out—",
          "Okay, I'm back. No hard feelings, right?",
          "Oh, and I code stuff too",
          "Sometimes even on purpose",
          "Wait, why am I looping this?",
          "Oh yeah, it's because I'm a",


        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        typeSpeed: 70, // Add this for faster typing

      }}
    />
  );
}

export default Type;
