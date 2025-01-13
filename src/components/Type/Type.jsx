
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "Freelancer", "Full-Stack Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 55,
      }}
    />
  );
}
