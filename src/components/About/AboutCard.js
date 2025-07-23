import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I’m <span className="purple">Aayush Soni</span> from
            <span className="purple"> Rajasthan, India</span>. I’m currently
            pursuing a B.Tech in Artificial Intelligence & Data Science at IIIT
            Sri City.
            <br />
            <br />
            I’m fluent in core technologies like
            <span className="purple"> C++, JavaScript, and Python</span>.
            <br />
            <br />I enjoy building things for the web — whether it’s
            <span className="purple"> frontend UIs</span>,
            <span className="purple"> backend systems</span>, or exploring
            emerging tech like <span className="purple">blockchain</span> and
            <span className="purple"> AI/ML</span>.
            <br />
            <br />
            Whenever possible, I apply my passion for developing products using
            <span className="purple"> Node.js</span> and modern JavaScript
            libraries and frameworks like
            <span className="purple"> React.js</span> and
            <span className="purple"> Next.js</span>.
            <br />
            <br />
            I’ve solved <span className="purple">500+ DSA problems</span> across
            multiple platforms, which has shaped my problem-solving mindset and
            helped me write efficient, clean code.
            <br />
            <br />
            When I'm not coding, you'll likely find me:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Tweaking UI/UX for side projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music while thinking about APIs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime
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
