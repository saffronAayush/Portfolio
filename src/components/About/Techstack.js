import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "C++", icon: <CgCPlusPlus />, level: 90 },
  { name: "JavaScript", icon: <DiJavascript1 />, level: 85 },
  { name: "Node.js", icon: <DiNodejs />, level: 85 },
  { name: "React.js", icon: <DiReact />, level: 90 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
  { name: "MongoDB", icon: <DiMongodb />, level: 65 },
  { name: "Python", icon: <DiPython />, level: 80 },
];

// Circle constants
const radius = 40;
const stroke = 8;
const normalizedRadius = radius - stroke * 2;
const circumference = normalizedRadius * 2 * Math.PI;

function CircularProgress({ percentage }) {
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      style={{ transform: "rotate(0deg)" }}
    >
      <circle
        stroke="#2c2c3f"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#8000ff"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + " " + circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ transition: "stroke-dashoffset 0.7s ease" }}
      />
      <text
        x="50%"
        y="50%"
        dy="0.3em"
        textAnchor="middle"
        fill="white"
        fontSize="1rem"
        fontWeight="400"
        style={{ userSelect: "none" }}
      >
        {percentage}%
      </text>
    </svg>
  );
}

const Techstack = () => {
  return (
    <div style={{ maxWidth: "720px", margin: "auto", paddingBottom: "50px" }}>
      {skills.map(({ name, icon, level }) => (
        <Row
          key={name}
          className="align-items-center mb-4"
          style={{
            color: "white",
            backgroundColor: "#1e1e2f",
            padding: "10px 15px",
            borderRadius: "8px",
            boxShadow: "0 0 8px rgba(128, 0, 255, 0.3)",
          }}
        >
          <Col xs={2} style={{ fontSize: "2.2rem", color: "purple" }}>
            {icon}
          </Col>
          <Col xs={3} style={{ fontWeight: "600", fontSize: "1.2rem" }}>
            {name}
          </Col>
          <Col xs={7} className="d-flex justify-content-center">
            <CircularProgress percentage={level} />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Techstack;
