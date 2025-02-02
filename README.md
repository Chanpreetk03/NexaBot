# Project Overview 🌟
NexaBot is a 24/7 AI-powered chatbot designed to provide personalized emotional support while helping users manage mental health challenges like stress, anxiety, and depression. The platform aims to create a safe, confidential, and empathetic space for users to seek help at any time.

## Key Features:

### 1. User Authentication 🔐:
Sign Up & Sign In: Users must create an account and log in to access the chatbot. This ensures secure and personalized interactions.
Admin Login: Admins can log in to manage platform content, monitor interactions, and provide oversight.
Profile Creation: Once signed in, users can create and manage their profiles, helping NexaBot tailor its responses based on user preferences and emotional needs.

### 2. Chat Functionality 💬:
Access with Login: Users must be signed in to use the chatbot feature. Without an account, users will not be able to engage with NexaBot, ensuring privacy and tailored experiences for each individual.

### 3. Mental Health Resources 📚:
A dedicated Resources Page provides a variety of self-help tools, articles, podcasts, and coping strategies to support users in managing their emotional well-being.

### 4. Therapist Integration 💼:
Users can seamlessly connect with licensed therapists for professional support through the platform. This feature is available after signing up and logging in.

### 5. Social Events 🎉:
A Social Events Page allows users to discover or host mental health-related events, promoting community engagement and reducing isolation.

### 6. SOS Page 🚑:
The SOS Page offers emergency contacts and resources for users in crisis, ensuring immediate access to urgent support.

---

## 🧠 Nexabot - Frontend 🤖

Nexabot is a chatbot designed to provide emotional support and mental health resources. This repository contains the frontend code for the Nexabot app, built using Next.js, Tailwind CSS, and TypeScript.

### 🛠️ Requirements
Node.js (v14 or later) 🌐
npm or yarn ⚡
 
### 💻 Installation:

1. Clone the repository: git clone https://github.com/Chanpreetk03/NexaBot.git

2. Navigate to the project folder: cd Frontend

3. Install dependencies: npm install or yarn install

🚀 Running the Project:

 1. Start the development server: npm run dev or yarn dev

2. Open your browser and go to http://localhost:3000 to see the app! 🌐

### 📦 Dependencies:

1. Next.js: Framework for React-based apps. ⚛️
2. Tailwind CSS: CSS framework for quick UI development. 🎨
3. TypeScript: JavaScript with type checking. 🔍
4. React: JavaScript library for UI components. ⚛️

### 📁 Project Structure:

```
/Frontend
  ├── /pages            # 📄 Page components
  ├── /components       # 🔧 Reusable UI components
  ├── /styles           # 🎨 Tailwind CSS styles
  ├── /public           # 🖼️ Static assets (images, fonts)
  ├── tailwind.config.js# ⚙️ Tailwind CSS configuration
  ├── tsconfig.json     # 🔧 TypeScript config
  ├── package.json      # 📦 Dependencies and scripts
```

---

## NexaBot Backend

The project structure is organized as follows:
```
NexaBot/
 └── backend/ 
 ├── app/ │ 
 ├── main.py # FastAPI application entry point 
 │ ├── database.py # MongoDB connection setup 
 │ ├── models/ 
 │ │ └── user.py # User database model 
 │ ├── schemas/ 
 │ │ └── user.py # Pydantic schemas for users 
 │ ├── routes/ 
 │ │ ├── user.py # User management endpoints 
 │ │ ├── auth.py # Login endpoint and JWT authentication 
 │ │ └── chat.py # Chat API endpoints 
 │ └── utils/ 
 │ └── auth.py # Authentication helpers (hashing, token creation) 
 ├── .env # Environment variables configuration 
 ├── requirements.txt # Python dependencies 
 └── README.md # This README file
```


## Environment Variables

Create a `.env` file in the `backend` folder with the following keys:

```dotenv
# MongoDB Atlas connection string (with your database name)
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# JWT Secret Key for signing tokens
JWT_SECRET=your_secret_key

# Gemini API Key for the emotional support chatbot
GEMINI_API_KEY=your_gemini_api_key

# (Optional) PORT for deployment (Render or other hosting platforms will set this automatically)
PORT=8000

``` 

Replace username, password, cluster, and database with your actual credentials.

---

## Installation
### Clone the Repository:

bash 
```
git clone https://github.com/Chanpreetk03/NexaBot.git

cd NexaBot/backend
```

### Create and Activate a Virtual Environment:

bash
```
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

```

### Install Dependencies:

bash
```
pip install -r requirements.txt
```
### Running the Application
Ensure your .env file is correctly configured.

#### Start the FastAPI Server:

bash
```
uvicorn app.main:app --reload
```

#### Access the API:

The server will run at http://127.0.0.1:8000. You can view the interactive API documentation at:

Swagger UI: http://127.0.0.1:8000/docs
ReDoc: http://127.0.0.1:8000/redoc
API Documentation

### User Endpoints:

POST /users/ – Create a new user (returns user details and a JWT token).

GET /users/ – Retrieve all users (protected endpoint).

GET /users/{id} – Retrieve a single user by ID (protected endpoint).

PATCH /users/{id} – Update user details (protected endpoint).

DELETE /users/{id} – Delete a user (protected endpoint).

### Authentication Endpoint:

POST /login/ – Login endpoint to authenticate and receive a JWT token.

### Chat Endpoint:

POST /chat/ – Chat endpoint to interact with the Gemini API for emotional support.

### Deployment
When deploying to a service like Render:

Set the required environment variables (e.g., MONGO_URI, JWT_SECRET, GEMINI_API_KEY, PORT).
Configure the application entry point in your deployment settings (e.g., uvicorn app.main:app --host 0.0.0.0 --port $PORT).
Push your code to GitHub, and Render will automatically deploy the latest version.
Monitor logs to ensure the service runs smoothly.