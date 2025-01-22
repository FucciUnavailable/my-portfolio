import React, { useState, useRef } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCards'; // Your ProjectCard component
import Particle from '../Particle';

// Project images
import ecommerce from '../../Assets/Projects/ecommerce.png';
import game from '../../Assets/Projects/game.png';

// Custom hook to detect when an element is in view
import useInView from '../../Hooks/useInView';

function Projects() {
  const [selectedTag, setSelectedTag] = useState('');

  // Create refs for each project section
  const sectionRefs = useRef([React.createRef(), React.createRef()]);

  const inView1 = useInView(sectionRefs.current[0]);
  const inView2 = useInView(sectionRefs.current[1]);

  const sectionAnimation = (inView) => ({
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 50,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.6 },
    },
  });

  // Sample project data
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
  const filterProjects = (tag) => {
    setSelectedTag(tag); // Set the selected tag
  };

  const filteredProjects = selectedTag
    ? projectData.filter((project) => project.tags.includes(selectedTag))
    : projectData;

  const allTags = [...new Set(projectData.flatMap((project) => project.tags))];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.h1
          className="project-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          My Recent <strong className="purple">Projects</strong>
        </motion.h1>

        {/* Dropdown for tag filtering */}
        <Dropdown style={{ marginBottom: '20px', zIndex: 10 }}>
          <Dropdown.Toggle variant="outline-primary" id="tag-filter-dropdown" style={{ color: 'purple' }}>
            {selectedTag || 'All Projects'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSelectedTag('')}>All Projects</Dropdown.Item>
            {allTags.map((tag, index) => (
              <Dropdown.Item key={index} onClick={() => filterProjects(tag)}>
                {tag}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index} ref={sectionRefs.current[index]}>
              <motion.div
                {...sectionAnimation(index === 0 ? inView1 : inView2)}
                style={{ marginBottom: '20px' }}
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                  tags={project.tags}
                  isBlog={false}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
