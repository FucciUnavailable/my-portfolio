import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Amine Akacha (Fucci Online) </span>
            <span className="purple">Tunisian Problem Solver</span> studied in <span className="purple">France </span>and currently living in the <span className="purple">USA</span>.
            <br />
            I am currently working as a Freelance Software Developer
            <br />
            I have completed 3 years of coursework in advanced mathematics, including topics such as calculus, linear algebra, and statistical analysis, at Universite Paul-Sabatier III.
            Specialized in discrete mathematics, gaining foundational knowledge in algorithms, graph theory, and combinatorics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading (Favorite books range from Dostoevsky to Cervantes and then back to Toni Morrison)
            </li>
            <li className="about-activity">
              <ImPointRight /> Fixing things (I get unlogically excited at the though of having a Green light to take something apart in order to fix it)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling (I have lived across 3 continents and feel an enthralling urge to discover both city and nature.)
            </li>
            <li className="about-activity">
              <ImPointRight /> LEarning (I have an unquenchable thirst for learning about EVERYTHING.)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is as permanent as a temporary solution that works"{" "}
          </p>
          <footer className="blockquote-footer">Reddit probably</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
