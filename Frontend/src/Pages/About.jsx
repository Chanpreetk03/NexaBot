import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { FaCog } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0A1828] to-[#178582]">
      {/* Sidebar */}
      <div className="sidebar bg-[#178582] w-40 p-4 space-y-4 fixed top-0 left-0 min-h-screen flex flex-col justify-between">
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="font-bold text-white hover:text-[#BFA181] transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-bold hover:text-[#BFA181] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-bold text-white hover:text-[#BFA181] transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Bottom Content - Profile and Settings */}
        <div className="flex flex-col items-center space-y-4 mb-6">
          {/* Account Holder */}
          <div className="flex items-center justify-center">
            <div className="w-15 h-15 bg-gradient-to-r from-[#0A1828] to-[#178582] rounded-full flex justify-center items-center shadow-lg">
              <span className="text-white text-sm font-bold">TP</span>
            </div>
          </div>

          {/* Settings Icon */}
          <a
            href="#"
            className="text-[#0A1828] hover:text-[#BFA181] transition-colors"
          >
            <FaCog className="text-xl" />
          </a>
        </div>
      </div>

      {/* Main Content - About */}
      <div className="flex-grow ml-40 p-8 space-y-6 mt-5 max-w-8xl mx-auto">
        <div className="text-center text-2xl text-white font-bold">
          <p>About Us</p>
        </div>

        {/* About Content */}
        <div className="text-center text-white mt-6">
          <p>
            We are a team dedicated to providing the best AI chatbot solutions.
            Our mission is to help businesses and individuals automate
            conversations and streamline communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
