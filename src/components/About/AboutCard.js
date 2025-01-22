import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi, I’m <span className="purple">Amine Akacha</span>, a Freelance Software Developer based in the <span className="purple">USA.</span>.
          With a strong foundation in advanced mathematics and discrete structures, I specialize in building efficient and scalable solutions.
          <br />
          <br />
          Outside of work, I enjoy:
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Reading classic and contemporary literature
          </li>
          <li className="about-activity">
            <ImPointRight /> Solving technical challenges and fixing things
          </li>
          <li className="about-activity">
            <ImPointRight /> Exploring new cultures through travel
          </li>
        </ul>
  
        <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
          "Simplicity is the ultimate sophistication."
        </p>
        <footer className="blockquote-footer">Leonardo da Vinci</footer>
      </blockquote>
    </Card.Body>
  </Card>
  
  );
}

export default AboutCard;
