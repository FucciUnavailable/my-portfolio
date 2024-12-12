import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed A. Akacha (Fucci) </span>
            from <span className="purple"> Toulouse, France.</span>
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
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Fixing things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is as permanent as a temporary solution that works"{" "}
          </p>
          <footer className="blockquote-footer">Fucci and Milton Friedman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
