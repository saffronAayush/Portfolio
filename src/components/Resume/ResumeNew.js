import { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Resume_Aayush.pdf";
import Particle from "../Particle";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const containerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(600); // default width

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        // subtract some padding from container width
        const newWidth = containerRef.current.offsetWidth - 32;
        setPageWidth(newWidth > 300 ? newWidth : 300); // minimum width 300px
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Container
      fluid
      className="resume-section"
      style={{
        padding: "2rem 1rem",
      }}
      id="resume"
    >
      <Particle />
      <h1
        className="project-heading"
        style={{ marginTop: "-30px", marginBottom: "25px" }}
      >
        My <strong className=" purple">Resume</strong>
      </h1>
      <Row
        className="justify-content-center mb-4"
        style={{ position: "relative" }}
      >
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "250px", zIndex: "10000" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row
        ref={containerRef}
        className="justify-content-center resume"
        style={{
          margin: "auto",
          marginBottom: "3rem",
          backgroundColor: "#1e1e1e", // dark background
          borderRadius: "8px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
          padding: "1rem",
          maxWidth: "900px",
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <Document file={pdf} className="d-flex justify-content-center">
          <Page
            pageNumber={1}
            width={pageWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </Row>

      <Row className="justify-content-center" style={{ position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "250px", marginTop: "30px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
