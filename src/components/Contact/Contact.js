import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [mailLink, setMailLink] = useState(
    "https://mail.google.com/mail/?view=cm&fs=1&to=soniaayush5562@gmail.com"
  );

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setMailLink(
      isMobile
        ? "mailto:soniaayush5562@gmail.com"
        : "https://mail.google.com/mail/?view=cm&fs=1&to=soniaayush5562@gmail.com"
    );
  }, []);

  return (
    <Container fluid className=" py-5 about-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <h1 className="section-title">Let's Connect</h1>
            <p className="section-subtitle">
              I’d love to hear from you. Feel free to reach out!
            </p>

            <ul className="social-icons-list d-flex justify-content-center flex-wrap gap-4 mt-4 p-0">
              <li className="social-icon-item">
                <a
                  href="https://github.com/saffronaayush"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub"
                >
                  <AiFillGithub size={30} />
                </a>
              </li>
              <li className="social-icon-item">
                <a
                  href={mailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                  aria-label="Gmail"
                >
                  <SiGmail size={28} />
                </a>
              </li>
              <li className="social-icon-item">
                <a
                  href="https://www.linkedin.com/in/aayush-soni-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={28} />
                </a>
              </li>
              <li className="social-icon-item">
                <a
                  href="https://www.instagram.com/saffron_aayush"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                  aria-label="Instagram"
                >
                  <AiFillInstagram size={28} />
                </a>
              </li>
            </ul>

            <div className="contact-info mt-5">
              <h2 className="contact-heading">Contact Information</h2>
              <p className="contact-text">
                <span className="contact-label">Email:</span>{" "}
                <a href={mailLink} className="contact-link">
                  soniaayush5562@gmail.com
                </a>
              </p>
              <p className="contact-text">
                <span className="contact-label">Phone:</span>{" "}
                <a href="tel:+917300309876" className="contact-link">
                  +91 73003 09876
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
