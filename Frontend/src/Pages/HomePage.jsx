import Header from '../Components/Header';
import TypingAnim from '../Components/TypingAnim';
import Footer from '../Components/Footer';
import robotImage from '../assets/robot.png';
import openAIImage from '../assets/openai.png';
import chatImage from '../assets/chat.png';

const HomePage = () => {
  return (
    <div className="w-full h-full bg-[#0A1828]">
      {/* Header Section */}
      <Header />

      {/* Top Section: Typing Animation */}
      <div className="flex flex-col items-center mx-auto mt-12">
        <div>
          <TypingAnim />
        </div>
      </div>

      {/* Middle Section: Images */}
      <div className="flex flex-col md:flex-row gap-5 my-10 justify-center items-center">
        <img
          src={robotImage}
          alt="robot"
          className="w-48 md:w-56 mx-auto"
        />
        <img
          className="w-48 md:w-56 mx-auto rotate-12"
          style={{ filter: "invert(1) grayscale(1) contrast(100%)" }}
          src={openAIImage}
          alt="openai"
        />
      </div>

      {/* Bottom Section: Chat Image */}
      <div className="flex justify-center mx-auto mt-6">
        <img
          src={chatImage}
          alt="chatbot"
          className="w-4/5 md:w-3/5 rounded-2xl shadow-[5px_-5px_105px_#64f3d5] mt-5 mb-5 p-4"
        />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;




