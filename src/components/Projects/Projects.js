import React, { useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; // Assuming your ProjectCard component is as defined before
import Particle from "../Particle";

// Import project images
// Import project images
import game from "../../Assets/Projects/game.png";
import katze from "../../Assets/Projects/katze.png";
import proxishop from "../../Assets/Projects/proxishop.png";
import d3 from "../../Assets/Projects/d3.png";
import converter from "../../Assets/Projects/converter.png";
import sudoku from "../../Assets/Projects/sudoku.png";
import SQL from "../../Assets/Projects/SQL.png";
import tennis from "../../Assets/Projects/tennis.png";
import apexpainting from "../../Assets/Projects/apexpainting.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import microservices from "../../Assets/Projects/microservices.png";
import jsprojects from "../../Assets/Projects/jsprojects.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import translator from "../../Assets/Projects/translator.png";

function Projects() {
  const [selectedTag, setSelectedTag] = useState("");

  // Sample project data
  const projectData = [
    {
      imgPath: ecommerce,
      title: "E-Commerce Website",
      description: "E-Commerce Website built using React, Redux, Node.js, and MongoDB.",
      ghLink: "https://github.com/FucciUnavailable/fucci-commerce",
      demoLink: "https://youtu.be/TUkairByAPQ",
      tags: ["Full Stack"],
    },
    {
      imgPath: katze,
      title: "Katze",
      description: "Personal Chat Room built with PUG, Express, and Socket.IO.",
      ghLink: "https://github.com/FucciUnavailable/Chat-App",
      demoLink: "https://chat-app-y4bw.onrender.com/",
      tags: ["Full Stack"],
    },
    {
      imgPath: game,
      title: "Jeopardy Fighter",
      description:"A Fighting game I developed using canvas with AI Logic and a twist inspired by the show JEOPARDY where you answer questions and either gain health or lose it!",
      ghLink: "https://github.com/FucciUnavailable/JeopardyFighter",
      demoLink: "https://fucciunavailable.github.io/JeopardyFighter/",
      tags: ["Front End", "JavaScript"],
    },
    {
      imgPath: portfolio,
      title: "Personal Portfolio",
      description:"Personal Portfolio using React, various libraris and a functional API for form service, github for managament and vercel for deployment.",
      ghLink: "https://github.com/FucciUnavailable/my-portfolio",
      demoLink: "https://mohamed-akacha.vercel.app/",
      tags: ["Front End", "JavaScript"],
    },
    {
      imgPath: apexpainting,
      title: "Painting Company Website",
      description:"A user friendly and modern website for a local painting company Apex Painting.",
      ghLink: "https://github.com/FucciUnavailable/Painting-Company",
      demoLink: "https://github.com/FucciUnavailable/Painting-Company",
      tags: ["Front End"],
    },
    {
      imgPath: tennis,
      title: "Tennis Website with link to main tunisian company",
      description:"A front-end project for a Tunisian Tennis Platform I created from scratch using various methods for styling and enforcing a user friendly experience.",
      ghLink: "https://github.com/FucciUnavailable/Painting-Company",
      demoLink: "https://amynnbrah.github.io/TennisProject/",
      tags: ["Front End"],
    },
    {
      imgPath: SQL,
      title: "PSQL + bash scripting projects",
      description:"This bundle showcases a collection of SQL projects designed to highlight advanced database management and query optimization skills. Coupled with bash scripting for creating stores and data within the PSQL databases.",
      ghLink: "https://github.com/FucciUnavailable/SQL-Projects-SHELL/tree/main",
      tags: ["Database", "Bash"],
    },
    {
      imgPath: sudoku,
      title: "Sudoku Solver",
      description:"Sudoku solver with nice UI, wrote the logic from scratch and used chai for testing",
      ghLink: "https://github.com/FucciUnavailable/sudoku-solver",
      demoLink: "https://3000-freecodecam-boilerplate-5brkg1ihfje.ws-us117.gitpod.io",
      tags: ["Full Stack"],
    },
    {
      imgPath: translator,
      title: "American-British Translator",
      description:"Translator built using Node.js and tested with Mocha / Chai",
      ghLink: "https://github.com/FucciUnavailable/translator",
      tags: ["Full Stack"],
    },
    {
      imgPath: microservices,
      title: "RESTful API MicroServices",
      description:"Different microservices created using express/mongodb/nodejs, multer and other libraries handled with git.",
      ghLink: "https://github.com/FucciUnavailable/Little-NodeJs-MongoDb-Projects",
      tags: ["Micro Service", "Backend", "Git", "Database"],
    },
    
    {
      imgPath: jsprojects,
      title: "Front-End Projects",
      description:"A bundle of Javascript/React projects: Markup-Up React, Calculator, Drum-Machine, Pomodoro-Timer",
      ghLink: "https://codepen.io/collection/JYGGyN",
      demoLink: "https://codepen.io/collection/JYGGyN",
      tags: ["Front End", "React.js ", "JavaScript"],
    },
    {
      imgPath: d3,
      title: "Data Visualization and Analysis using D3.js",
      description:"A bundle of projects I made using D3 to handle Data including, A Choropelth map chart, A bar chart, A Heat Map, A tree map and A Scatterplot graph.",
      ghLink: "https://codepen.io/collection/adMMyp",
      demoLink: "https://codepen.io/collection/adMMyp",
      tags: ["Front End", "D3.js"],
    },
    {
      imgPath: converter,
      title: "Metric/Imperial converter",
      description:"This Metric Converter project allows users to easily convert between different units of measurement, such as length (miles to kilometers), volume (gallons to liters), weight (pounds to kilograms), and more. The application provides both a simple user interface for manual conversion and an API endpoint that handles conversion requests programmatically.",
      ghLink: "https://github.com/FucciUnavailable/metric-converter-chai",
   
      tags: ["Backend"],
    },
    {
      imgPath: proxishop,
      title: "ProxiShop",
      description:"A Collaborative work to create a Trade and Shop APP in Tunisia. ",
      ghLink: "https://github.com/FucciUnavailable/ProxiPal2",
      demoLink: "https://www.youtube.com/watch?v=scTiQtTsdno",
      tags: ["Front End"],
    },
  ];

  // Function to sort projects based on selected criteria (title or tags)
 

  // Function to filter projects by the selected tag
  const filterProjects = (tag) => {
    setSelectedTag(tag); // Set the selected tag
  };

  // Filtered projects based on the selected tag
  const filteredProjects = selectedTag
    ? projectData.filter((project) => project.tags.includes(selectedTag))
    : projectData;

  // Get unique tags from all projects
  const allTags = [...new Set(projectData.flatMap((project) => project.tags))];


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Please note: Most of these projects are part of a learning process. I am constantly exploring new problems to tackle on this long journey.
        </p>
        <p style={{ color: "purple" }}>
          I am always looking for new projects to work on, so if you have any ideas or projects you would like to collaborate on, please feel free to reach out to me.
        </p>
        
            {/* Tag Filter Dropdown */}
        <Dropdown style={{ marginBottom: "20px", zIndex: 10 }}>
          <Dropdown.Toggle variant="outline-primary" id="tag-filter-dropdown">
            {selectedTag || "All Projects"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* Clear filter option */}
            <Dropdown.Item onClick={() => setSelectedTag("")}>All Projects</Dropdown.Item>
            {/* Dynamically add tags as filter options */}
            {allTags.map((tag, index) => (
              <Dropdown.Item key={index} onClick={() => filterProjects(tag)}>
                {tag}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>



        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Render filtered and sorted projects */}
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                tags={project.tags}
                isBlog={false} // Adjust as necessary
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
