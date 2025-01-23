import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Tooltip, OverlayTrigger } from "react-bootstrap"; // Tooltip for hover effects
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiDjango,
} from "react-icons/di";
import { SiD3Dotjs, SiPostgresql, SiChai, SiDotnet } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

// Icon data with names
const techStack = [
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiDotnet />, name: ".NET" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <FaAngular />, name: "Angular" },
  { icon: <DiDjango />, name: "Django" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiD3Dotjs />, name: "D3.js" },
  { icon: <SiChai />, name: "Chai" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },
];

function Languages() {
  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }, // Delays between items
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="techstack-container"
    >
      <Row style={{ justifyContent: "center", gap: "20px" }}>
        {techStack.map((tech, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div variants={itemVariants}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{tech.name}</Tooltip>}
              >
                <div style={{ fontSize: "3rem", cursor: "pointer" }}>
                  {tech.icon}
                </div>
              </OverlayTrigger>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Languages;
