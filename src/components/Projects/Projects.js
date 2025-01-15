import React, { useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; // Assuming your ProjectCard component is as defined before
import Particle from "../Particle";

// Import project images
// Import project images
import game from "../../Assets/Projects/game.png";
import katze from "../../Assets/Projects/katze.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
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
      demoLink: "https://fucci-commerce-frontend.vercel.app/",
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
