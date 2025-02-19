import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Tooltip, OverlayTrigger } from "react-bootstrap"; // Tooltip for hover effects
import { DiGit, DiLinux } from "react-icons/di";
import { SiFirebase, SiDocker, SiPostman } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

// Icon data with names
const techStack = [
  { icon: <SiDocker />, name: "Docker" },
  { icon: <FaJenkins />, name: "Jenkins" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <VscAzure />, name: "Azure" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <DiLinux />, name: "Linux" },

];

function Techstack() {
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

export default Techstack;
