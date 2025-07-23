import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import homeLogo from "../../Assets/home-main.svg";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Particle from "../Particle";
import Projects from "../Projects/Projects.js";
import ResumeNew from "../Resume/ResumeNew.js";
import Type from "./Type";

function Home() {
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
    <section>
      <Particle />
      <Container
        fluid
        className="home-section"
        id="home"
        style={{ minHeight: "100dvh" }}
      >
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Aayush Soni</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div>
                <ul
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <li className="social-icons">
                    <a
                      href="https://github.com/saffronaayush"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href={mailLink}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <SiGmail />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/aayush-soni-dev"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/saffron_aayush"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col
              md={5}
              className="d-none d-md-block"
              style={{ paddingBottom: 20 }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <About />
      <Projects />
      <ResumeNew />
      <Contact />
    </section>
  );
}

export default Home;
