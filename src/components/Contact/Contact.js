import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Particle from "../Particle";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(""); // Define result state to store form submission result
  const { width, height } = useWindowSize();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "cb32de7c-488b-467c-8385-637d6486b0d1");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!"); // Set result message on success
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message); // Set result message on error
      }
    } catch (error) {
      console.error("Form submission error", error);
      setResult("An error occurred while submitting the form."); // Handle network error
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      {submitted && <Confetti width={width} height={height} />}
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Contact</strong> Me
        </h1>

        {/* Social Media Links Section */}
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={6} className="contact-social">
            <h2>Let's Connect</h2>
            <p>Email: <strong className="purple">akachamedamine@gmail.com</strong></p>
            <p>If you got this far: click anywhere on the background to leave a <strong className="purple">star!</strong></p>
            <div>
              <a href="https://github.com/FucciUnavailable" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/amine-akacha-a97240340/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://x.com/AkachaBenj66841" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </Col>
        </Row>

        {/* Contact Form Section */}
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={6} className="contact-form">
            {!submitted ? (
              <>
                <h2>Send Me a Message</h2>
                <Form method="POST" onSubmit={handleSubmit}>
                  <input type="hidden" name="personal-portfolio" value="contact" />

                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      placeholder="Your Message"
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
                    Submit
                  </Button>
                </Form>
              </>
            ) : (
              <div className="thank-you-message">
                <h2>Thank you for contacting me!</h2>
                <p>I'll respond to your message as soon as possible.</p>
                {/* Display the result message here */}
                <p>{result}</p> {/* This will display the result */}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
