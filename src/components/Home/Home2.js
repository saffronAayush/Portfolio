import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/me.jpg";

function Home2() {
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
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="display-4 text-center fw-bold mb-4">
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body fs-5 text-justify px-3 px-md-5">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className=" purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />I enjoy building things for the web — whether it's{" "}
              <i>
                <b className="purple">frontend UIs</b>
              </i>
              ,
              <i>
                <b className="purple"> backend systems</b>
              </i>
              , or exploring <b className="purple">blockchain</b> and{" "}
              <b className="purple">AI/ML</b>.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <b className="purple"> Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp;like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="home-about-social text-center"
            style={{ marginTop: "20px" }}
          >
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links d-flex justify-content-center flex-wrap gap-3 p-0">
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

            {/* Contact Section */}
            <div className="contact-info mt-5">
              <h1>CONTACT</h1>
              <p>
                You can also <span className="purple">reach out directly</span>{" "}
                via:
              </p>
              <div className="contact-details mt-3">
                <p>
                  📧 <span className="purple">Email:</span>{" "}
                  <a href={mailLink} className="contact-link">
                    soniaayush5562@gmail.com
                  </a>
                </p>
                <p>
                  📞 <span className="purple">Phone:</span>{" "}
                  <a href="tel:+918888888888" className="contact-link">
                    +91 73003 09876
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
