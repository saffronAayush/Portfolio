import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        fontSize: "20px",
      }}
    >
      <Typewriter
        options={{
          strings: [
            "Full Stack Developer",
            "Exploring AI & Data",
            "Freelancer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
