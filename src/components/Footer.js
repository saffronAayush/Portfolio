import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();

  let year = date.getFullYear();

  const [mailLink, setMailLink] = useState(
    "https://mail.google.com/mail/?view=cm&fs=1&to=soniaayush5562@gmail.com"
  );

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      setMailLink("mailto:soniaayush5562@gmail.com");
    } else
      setMailLink(
        "https://mail.google.com/mail/?view=cm&fs=1&to=soniaayush@gmail.com"
      );
  }, []);
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>soniaayush5562@gmail.com</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>+91 73003 09876</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/saffronaayush"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={mailLink}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aayush-soni-dev"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/saffron_aayush"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
