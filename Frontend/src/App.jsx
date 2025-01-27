import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage"; // Ensure the correct path for the Home component
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ChatPage from "./Pages/ChatPage";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Chat Route */}
        <Route path="/chat" element={<ChatPage />} />
        
        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;


