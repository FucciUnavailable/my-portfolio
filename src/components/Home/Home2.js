import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import useInView from "../../Hooks/useInView"; // Import the custom hook

function Home2() {
  const textRef = useRef(null);
  const avatarRef = useRef(null);

  // Using the custom hook to detect when elements come into view
  const isTextInView = useInView(textRef);
  const isAvatarInView = useInView(avatarRef);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            {/* Animate the text when in view */}
            <motion.h1
              ref={textRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTextInView ? 1 : 0, y: isTextInView ? 0 : 20 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ fontSize: "2.6em" }}
            >
              THANK <span className="purple"> YOU </span> FOR VISITING
            </motion.h1>
            <motion.h2
              ref={textRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTextInView ? 1 : 0, y: isTextInView ? 0 : 20 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Tech Tip of the Day
            </motion.h2>
            <motion.p
              ref={textRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTextInView ? 1 : 0, y: isTextInView ? 0 : 20 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Did you know? The first computer virus, known as "Creeper," was created in 1971. It was not malicious but rather a self-replicating program that displayed a message: "I'm the Creeper, catch me if you can!"
            </motion.p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* Animate the avatar image when in view */}
              <motion.img
                ref={avatarRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isAvatarInView ? 1 : 0, scale: isAvatarInView ? 1 : 0.8 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="fade-in-text">FIND ME ON</h1>
            <p className="fade-in-text">
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FucciUnavailable"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/AkachaBenj66841"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amine-akacha-a97240340/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
