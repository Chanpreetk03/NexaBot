import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header"; // Adjust the path based on your project structure

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (send the email and password to the backend)
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Full-width Header (imported from another page) */}
      <Header /> {/* This is your existing Header component */}

      <div className="flex flex-1 justify-center items-center bg-gradient-to-b from-[#0A1828] to-[#178582] text-white">
        <form
          onSubmit={handleLoginSubmit}
          className="w-full max-w-md bg-[#1C2B37] p-10 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105"
        >
          {/* Circle with NexaBot Login text */}
          <div className="flex justify-center items-center mb-8">
            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-[#0A1828] to-[#178582] rounded-full shadow-xl animate-pulse flex justify-center items-center">
              <h2 className="text-white text-lg md:text-xl font-bold tracking-wide text-center">
                NexaBot
                <br />
                Login
              </h2>
            </div>
          </div>

          {/* Email Input */}
          <input
            type="email"
            className="w-full p-4 mb-4 rounded-lg text-white placeholder:text-gray-500 border-2 border-[#178582] focus:outline-none focus:ring-2 focus:ring-[#178582] focus:border-[#178582]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          {/* Password Input */}
          <input
            type="password"
            className="w-full p-4 mb-4 rounded-lg text-white placeholder:text-gray-500 border-2 border-[#178582] focus:outline-none focus:ring-2 focus:ring-[#178582] focus:border-[#178582]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#178582] text-white rounded-lg transition-colors duration-300 hover:bg-[#0A1828] shadow-xl"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="mt-4 text-center text-sm">
            <p>
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-[#BFA181] hover:text-[#178582] transition-colors duration-300"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;







