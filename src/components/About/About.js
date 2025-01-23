import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Languages from "./Languages";
import { motion } from "framer-motion";

// Intersection Observer Hook to track when an element is in the viewport
function useInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state based on intersection
      },
      { threshold: 0.2 } // Trigger animation when 20% of the element is in view
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element); // Cleanup observer
    };
  }, [ref]);

  return isInView;
}

function About() {
  // Create refs for each section
  const sectionRef1 = React.useRef(null);
  const sectionRef2 = React.useRef(null);
  const sectionRef3 = React.useRef(null);
  const sectionRef4 = React.useRef(null);
  const sectionRef5 = React.useRef(null);

  // Get inView state for each section
  const inView1 = useInView(sectionRef1);
  const inView2 = useInView(sectionRef2);
  const inView3 = useInView(sectionRef3);
  const inView4 = useInView(sectionRef4);
  const inView5 = useInView(sectionRef5);

  // Animation logic for each section
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

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Section: Who Am I */}
        <motion.div
          {...sectionAnimation(inView1)}
          ref={sectionRef1}
          style={{ justifyContent: "center", padding: "10px" }}
        >
          <Row>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Who <strong className="purple">Am I?</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
        </motion.div>

        {/* Section: Professional Skillset */}
        <motion.div
          {...sectionAnimation(inView2)}
          ref={sectionRef2}
        >
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </motion.div>

        {/* Section: Programming Languages */}
        <motion.div
          {...sectionAnimation(inView3)}
          ref={sectionRef3}
        >
          <h1 className="project-heading">
            Programming <strong className="purple">Languages </strong>
          </h1>
          <Languages />
        </motion.div>

        {/* Section: Tools I use */}
        <motion.div
          {...sectionAnimation(inView4)}
          ref={sectionRef4}
        >
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </motion.div>

        {/* Section: Github */}
        <motion.div
          {...sectionAnimation(inView5)}
          ref={sectionRef5}
        >
          <Github />
        </motion.div>
      </Container>
    </Container>
  );
}

export default About;
