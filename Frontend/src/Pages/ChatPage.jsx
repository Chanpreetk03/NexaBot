import { useState } from "react";
import { FaMicrophone, FaCamera, FaRegSmile } from "react-icons/fa";
import chatIcon from "../assets/chat-white.svg";
import Sidebar from "../Components/SideBar";
import EmojiPicker from 'emoji-picker-react';
  // Import the new emoji picker

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = message;

    // Call the backend to get the chatbot response
    const response = await fetch("http://localhost:8000/api/chatbot/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    const botReply = data.message;

    setChatHistory([
      ...chatHistory,
      { sender: "user", text: userMessage },
      { sender: "bot", text: botReply },
    ]);
    setMessage("");
  };

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const voiceMessage = event.results[0][0].transcript;
      setMessage(voiceMessage);
    };
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleEmojiClick = (emoji) => {
    setMessage(message + emoji.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0A1828] to-[#178582]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - Chat Window */}
      <div className="flex-grow ml-40 p-8 space-y-6 mt-5 max-w-8xl mx-auto">
        <div className="text-center text-2xl text-white font-bold">
          <p><span className="text-4xl">Hello</span><br />I am your AI NexaBot Assistant!</p>
        </div>

        {/* Chat Icon in the Center of the Page */}
        <div className="flex justify-center items-center mt-8 ">
          <div className="w-24 h-24 bg-gradient-to-r from-[#1E3A46] to-[#3A6F72] flex justify-center items-center rounded-3xl z-10 shadow-lg">
            <img
              src={chatIcon}
              alt="Chat Icon"
              className="w-14 h-14 animate-pulse"
            />
          </div>
        </div>

        {/* Prompt: What would you like to do today? */}
        <div className="text-center text-xl text-white mt-6">
          <p>What would you like to do today?</p>
        </div>

        {/* Start Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => console.log("Start clicked")}
            className="bg-gradient-to-r from-[#0A1828] to-[#178582] text-white py-3 px-14 rounded-full shadow-xl hover:bg-[#0A1828] transition-all font-bold text-xl"
          >
            Start
          </button>
        </div>

        {/* Chat History */}
        <div className="chatbox bg-[#178582] rounded-lg p-4 mb-8 h-[35vh] md:h-[30vh] overflow-y-scroll shadow-lg">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={message.sender === "user" ? "text-right" : "text-left"}
            >
              <p
                className={
                  message.sender === "user" ? "text-white" : "text-[#BFA181]"
                }
              >
                {message.text}
              </p>
            </div>
          ))}
        </div>

        {/* Message Input, Camera, Voice Input, Emoji Picker */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center space-x-4 mt-4"
        >
          <input
            type="text"
            className="w-full p-4 rounded-lg text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#178582] bg-gray-400"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Emoji Picker Icon */}
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="text-xl bg-gray-400 text-black p-3 rounded-full shadow-lg hover:bg-[#178582] transition-all"
          >
            <FaRegSmile />
          </button>

          {/* Show Emoji Picker */}
          {showEmojiPicker && (
            <div className="absolute bottom-20 left-0 bg-white shadow-lg rounded-md p-2">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}

          {/* Send Button */}
          <button
            type="submit"
            className="bg-[#178582] text-white p-3 rounded-full transition-all hover:bg-[#0A1828] shadow-xl"
          >
            Send
          </button>

          {/* Camera Icon for File Input */}
          <label
            htmlFor="file-upload"
            className="bg-gray-400 text-black p-3 rounded-full shadow-lg hover:bg-[#178582] transition-all"
          >
            <FaCamera className="text-xl" />
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileInput}
          />

          {/* Microphone Icon for Voice Input */}
          <button
            type="button"
            onClick={handleVoiceInput}
            className="bg-gray-400 text-black p-3 rounded-full shadow-lg hover:bg-[#178582] transition-all"
          >
            <FaMicrophone className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;

 





