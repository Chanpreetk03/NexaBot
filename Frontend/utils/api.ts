import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Register a new user
export const createUser = async (userData: { name: string; email: string; password: string; phone_number:string ; emergency_contact_name: string ; emergency_contact_number: string ; isAdmin: boolean}) => {
    const response = await api.post("/users", userData);
    
    return response.data;
};

// Login user
export const loginUser = async (credentials: { email: string; password: string }) => {
    const response = await api.post("/login", credentials);
    return response.data; // Should return token or user data
};

// Get user by ID
export const getUserById = async (userId: string) => {
    const response = await api.get(`/users/${userId}`);
    
    return response.data;
};

// Chat endpoint
export const chat = async (user_id:string, message:string) => {
    
    const response = await api.post(
    "/chat",
    { message,user_id },
    );

    return response.data;
};
