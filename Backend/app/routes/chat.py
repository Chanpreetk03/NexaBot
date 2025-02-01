from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.database import get_database  # Assuming this imports your MongoDB connection
from bson import ObjectId
import google.generativeai as genai
import os

router = APIRouter()

# Configure Gemini API Key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY is not set in environment variables")

genai.configure(api_key=GEMINI_API_KEY)

# Model Configuration
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash-exp",  # Or your desired model
    generation_config=generation_config,
    system_instruction="You are an emotional support chatbot. Your job is improve the user's mood. The response should be heartfelt, empathetic and warm. Make them feel heard, understood, and supported. Avoid generic responses—respond as a true emotional support companion.",
)

database = get_database()
users_collection = database["users"]
chat_collection = database["chats"]

class ChatRequest(BaseModel):
    user_id: str
    message: str

async def get_user(user_id):
    try:
        return await users_collection.find_one({"_id": ObjectId(user_id)})
    except Exception:
        return None

def serialize_history(history):
    serialized = []
    for item in history:
        serialized.append({
            "role": item.role,
            "parts": [
                {"role": part.role, "parts": [p for p in part.parts]} if isinstance(part, dict) else part.text
                for part in item.parts
            ]
        })
    return serialized



@router.post("/")
async def chat_with_ai(chat_request: ChatRequest):
    user = await get_user(chat_request.user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    user_name = user.get("name", "there")
    user_message = chat_request.message

    user_chat_history = await chat_collection.find_one({"user_id": chat_request.user_id})
    # print(user_chat_history)
    previous_history = user_chat_history.get("history", []) if user_chat_history else []
    # print(previous_history)
    # deserialized_history = deserialize_history(previous_history)

    chat_session = model.start_chat(history=previous_history)

    ai_response = chat_session.send_message(f"{user_name} says: {user_message}").text
    print(chat_session.history)
    chat_history_serialized = serialize_history(chat_session.history)

    if user_chat_history:
        await chat_collection.update_one(
            {"user_id": chat_request.user_id},
            {"$set": {"history": chat_history_serialized}}
        )
    else:
        await chat_collection.insert_one(
            {"user_id": chat_request.user_id, "history": chat_history_serialized}
        )

    return {"response": ai_response}