import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

import myImg from "../../Assets/me.jpg";

function About() {
  return (
    <Container id="about" fluid className="about-section">
      <Particle />
      <Container>
        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            marginTop: "-30px",
          }}
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Techstack />

        {/* <h1 className="project-heading" style={{ marginTop: "40px" }}>
          <strong className="purple">Tools</strong> I use
        </h1> */}
        {/* <Toolstack /> */}
      </Container>
    </Container>
  );
}

export default About;
