import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Text Section */}
            <Col md={7} className="home-header">
              <motion.h1
                className="heading"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Hi There!{" "}
                <span className="wave" aria-label="waving hand">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1
                className="heading-name"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                I'M <strong className="main-name">AMINE AKACHA</strong>
              </motion.h1>

              <motion.div
                style={{ padding: 50, textAlign: "left" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
              >
                <Type />
              </motion.div>
            </Col>

            {/* Image Section */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                src={homeLogo}
                alt="A welcoming illustration for the home page"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Home2 Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Home2 />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>
    </section>
  );
}

export default Home;
