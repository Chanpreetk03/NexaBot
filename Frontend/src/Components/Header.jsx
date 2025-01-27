import { Link } from 'react-router-dom';
import openAIImage from '../assets/openai.png'; // Assuming you want to use this as your logo image

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-[#0A1828]">
      {/* Left Side: Logo */}
      <div className="flex items-center">
      <Link to="/" className="flex items-center">
          <img 
            src={openAIImage} 
            alt="NexaBot Logo" 
            className="w-8 h-8 rounded-full mr-3" 
            style={{ filter: "invert(1) grayscale(1) contrast(100%)" }}
          />
          <h1 className="text-white text-xl font-bold">
            <span className='text-[#178582]'>NEXA</span>BOT
          </h1>
        </Link>
      </div>

      {/* Right Side: Login and Register Buttons */}
      <div className="flex space-x-4">
        <Link 
          to="/login" 
          className="text-white font-bold py-2 px-4  border-2 border-none rounded-lg bg-[#178582] hover:bg-white hover:text-[#0A1828] transition-all duration-300 "
        >
          LOGIN
        </Link>
        <Link 
          to="/register" 
          className="text-white font-bold py-2 px-4 bg-[#178582] transparent border-2 border-none rounded-lg hover:bg-white hover:text-[#0A1828] transition-all duration-300"
        >
          REGISTER
        </Link>
      </div>
    </header>
  );
};

export default Header;


