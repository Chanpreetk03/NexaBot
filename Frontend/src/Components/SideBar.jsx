import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar bg-[#178582] w-40 p-4 space-y-4 fixed top-0 left-0 min-h-screen flex flex-col justify-between">
      <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 rounded-full "
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

        {/* Settings Icon - Clickable */}
        <Link to="/settings">
          <FaCog className="text-[#0A1828] text-xl hover:text-[#BFA181] transition-colors" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
