import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Connecting you to emotional support... 💡",
        1000,
        "Built With OpenAI 🤖",
        2000,
        "Emotional support, one message away... 💬",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "3.75rem", // Tailwind equivalent would be text-5xl (but here we'll leave inline style for now)
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;



