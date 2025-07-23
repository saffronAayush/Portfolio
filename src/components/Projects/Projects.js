import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import projectsData from "./projectData";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <Container
      fluid
      className={"project-section"}
      id="project"
      style={
        !showAll
          ? {
              position: "relative",
              overflow: "hidden",
            }
          : {}
      }
    >
      {!showAll && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "80px",
            width: "100%",
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, rgba(175, 175, 175, 0) 0%, rgba(7, 6, 8, 0.9) 100%)",
            boxShadow: "inset 0 -50px 50px rgba(27, 17, 36, 0.2)",
          }}
        />
      )}
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ marginTop: "-30px" }}>
          My Recent <strong className="purple">Works</strong>
        </h1>

        <Row className="justify-content-center gy-4">
          {visibleProjects.map((project, index) => (
            <Col
              xs={12}
              sm={10}
              md={6}
              lg={4}
              key={index}
              className="project-card"
            >
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>

        {/* Styled Button */}
        {projectsData.length > 3 && (
          <Button variant="primary" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "See All Projects"}
          </Button>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
