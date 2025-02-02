from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from app.database import get_database
from bson import ObjectId
from app.utils.auth import verify_password, create_access_token
from datetime import timedelta

router = APIRouter()

database = get_database()
users_collection = database["users"]

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/")
async def login(login_request: LoginRequest):
    """User login with JWT authentication."""
    
    # Fetch user by email
    user = await users_collection.find_one({"email": login_request.email})
    
    if not user or not verify_password(login_request.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Create JWT Token
    access_token = create_access_token(
        data={"user_id": str(user["_id"]), "email": user["email"]},
        expires_delta=timedelta(minutes=60)
    )
    
    return {"access_token": access_token, "token_type": "bearer"}
