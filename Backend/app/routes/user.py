from fastapi import APIRouter, HTTPException, Depends
from bson import ObjectId
from app.database import database
from app.schemas.user import UserCreate, UserUpdate, UserResponse

router = APIRouter()
users_collection = database["users"]

@router.post("/", response_model=UserResponse)
async def create_user(user: UserCreate):
    """Create a new user"""
    existing_user = await users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already exists")

    new_user = await users_collection.insert_one(user.dict())
    created_user = await users_collection.find_one({"_id": new_user.inserted_id})
    
    return UserResponse(**created_user)

@router.get("/{id}", response_model=UserResponse)
async def get_user(id: str):
    """Get user details by ID"""
    user = await users_collection.find_one({"_id": ObjectId(id)})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return UserResponse(**user)

@router.get("/", response_model=list[UserResponse])
async def get_all_users():
    """Get all users"""
    users = await users_collection.find().to_list(100)
    return [UserResponse(**user) for user in users]

@router.patch("/{id}", response_model=UserResponse)
async def update_user(id: str, user_update: UserUpdate):
    """Update user details"""
    update_data = {k: v for k, v in user_update.dict(exclude_unset=True).items() if v is not None}
    
    if not update_data:
        raise HTTPException(status_code=400, detail="No valid fields to update")

    updated_user = await users_collection.find_one_and_update(
        {"_id": ObjectId(id)}, {"$set": update_data}, return_document=True
    )
    
    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")

    return UserResponse(**updated_user)

@router.delete("/{id}")
async def delete_user(id: str):
    """Delete a user"""
    result = await users_collection.delete_one({"_id": ObjectId(id)})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    
    return {"message": "User deleted successfully"}
