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
  { name: "JavaScript", icon: <DiJavascript1 />, level: 85 },
  { name: "Node.js", icon: <DiNodejs />, level: 80 },
  { name: "React.js", icon: <DiReact />, level: 90 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 70 },
  { name: "C++", icon: <CgCPlusPlus />, level: 90 },
  { name: "MongoDB", icon: <DiMongodb />, level: 65 },
  { name: "Python", icon: <DiPython />, level: 80 },
];

const Techstack = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "30px",
        backgroundColor: "#1e1e2f",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(128, 0, 255, 0.3)",
        fontFamily: "'Roboto', system-ui, sans-serif",
      }}
    >
      <h3
        style={{
          color: "#fff",
          marginBottom: "25px",
          textAlign: "start",
          fontSize: "1.8rem",
        }}
      >
        Professional <strong style={{ color: "#c792ea" }}>Skillset</strong>
      </h3>
      {skills.map(({ name, icon, level }) => (
        <div
          key={name}
          style={{
            marginBottom: "20px",
            color: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <div
              style={{
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "1.1rem",
              }}
            >
              <span style={{ fontSize: "1.5rem", color: "#c792ea" }}>
                {icon}
              </span>
              {name}
            </div>
            <span style={{ fontSize: "0.95rem" }}>{level}%</span>
          </div>
          <div
            style={{
              height: "8px",
              borderRadius: "6px",
              backgroundColor: "#3c3c53",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${level}%`,
                height: "100%",
                backgroundColor: "#633677",
                transition: "width 0.6s ease-in-out",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Techstack;
