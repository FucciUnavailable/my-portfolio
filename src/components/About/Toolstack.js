import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Tooltip, OverlayTrigger } from "react-bootstrap"; // For hover titles
import {
  SiVisualstudiocode,
  SiSlack,
  SiVercel,
  SiAdobephotoshop,
  SiFigma,
  SiMacos,
} from "react-icons/si";


// Toolstack data
const tools = [

  { icon: <SiMacos />, name: "macOS" },
  { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
  { icon: <SiFigma />, name: "Figma" },
];

function Toolstack() {
  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      className="toolstack-container"
    >
      <Row style={{ justifyContent: "center", gap: "20px" }}>
        {tools.map((tool, index) => (
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
                overlay={<Tooltip>{tool.name}</Tooltip>}
              >
                <div style={{ fontSize: "3rem", cursor: "pointer" }}>
                  {tool.icon}
                </div>
              </OverlayTrigger>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Toolstack;
