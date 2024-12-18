import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import game from "../../Assets/Projects/game.png";
import katze from "../../Assets/Projects/katze.png";
import proxishop from "../../Assets/Projects/proxishop.png";
import d3 from "../../Assets/Projects/d3.png";
import converter from "../../Assets/Projects/converter.png";
import soduku from "../../Assets/Projects/sudoku.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={katze}
              isBlog={false}
              title="Katze"
              description="Personal Chat Room or Workspace to share resources and hangout with friends built with, PUG, Express, Passport, Socket.IO, Redis and MongoDB."
              ghLink="https://github.com/FucciUnavailable/Chat-App"
              demoLink="https://chat-app-y4bw.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proxishop}
              isBlog={false}
              title="ProxiShop"
              description="Your Little neighborhood TRADE&SHOP App. allows people to create an account and a wallet."
              ghLink="https://github.com/FucciUnavailable/ProxiPal2"
              demoLink="https://www.youtube.com/watch?v=scTiQtTsdno"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Jeopardy Fighter"
              description="A Fighting game I developed using canvas with AI Logic and a twist inspired by the show JEOPARDY where you answer questions and either gain health or lose it!"
              ghLink="https://github.com/FucciUnavailable/JeopardyFighter"
              demoLink="https://fucciunavailable.github.io/JeopardyFighter/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d3}
              isBlog={false}
              title="Data Visualization and Analysis using D3.js"
              description="A bundle of projects I made using D3 to handle Data including, A Choropelth map chart, A bar chart, A Heat Map, A tree map and A Scatterplot graph."
              ghLink="https://codepen.io/collection/adMMyp"
              demoLink="https://codepen.io/collection/adMMyp"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={converter}
              isBlog={false}
              title="Metric/Imperial converter"
              description="This Metric Converter project allows users to easily convert between different units of measurement, such as length (miles to kilometers), volume (gallons to liters), weight (pounds to kilograms), and more. The application provides both a simple user interface for manual conversion and an API endpoint that handles conversion requests programmatically."
              ghLink="https://github.com/FucciUnavailable/metric-converter-chai"
              demoLink="https://metric-imperial-converter.freecodecamp.rocks/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soduku}
              isBlog={false}
              title="Soduku Solver"
              description="Soduku solver with nice UI, wrote the logic from scratch and used chai for testing"              
              ghLink="https://github.com/FucciUnavailable/sudoku-solver"
              demoLink="https://3000-freecodecam-boilerplate-5brkg1ihfje.ws-us117.gitpod.io"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
