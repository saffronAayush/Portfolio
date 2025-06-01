import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aayush Soni</span> from
            <span className="purple"> Rajasthan, India</span>.
            <br />
            <br />
            I’m currently pursuing a B.Tech in Artificial Intelligence & Data
            Science at IIIT Sri City.
            <br />
            <br />
            I’m passionate about solving real-world problems through code —
            whether it’s building scalable full-stack web apps, exploring
            <span className="purple"> AI and blockchain technologies</span>, or
            honing my skills in
            <span className="purple"> data structures and algorithms</span>.
            <br />
            <br />
            I have solved 500+ DSA problems across multiple platforms, which
            fuels my problem-solving mindset and helps me write efficient, clean
            code.
            <br />
            <br />
            When I'm not coding, you'll probably find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tweaking UI/UX for side projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music while thinking about APIs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build with purpose. Break it. Improve it. Repeat."
          </p>
          <footer className="blockquote-footer">Aayush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
