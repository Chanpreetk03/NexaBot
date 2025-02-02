from fastapi import APIRouter, HTTPException
from bson import ObjectId
from app.database import get_database
from app.schemas.user import UserCreate, UserUpdate, UserResponse
from app.utils.auth import hash_password

router = APIRouter()

# Get database instance
database = get_database()
users_collection = database["users"]


@router.post("/", response_model=UserResponse)
async def create_user(user: UserCreate):
    """Create a new user with hashed password"""
    print(user)
    # Check if the email already exists
    existing_user = await users_collection.find_one({"email": user.email})
    
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already exists")

    # Hash the password before saving
    hashed_password = hash_password(user.password)  # Hash password
    print(user)
    print(hashed_password)
    # Prepare the user data
    user_dict = user.dict()
    user_dict["_id"] = ObjectId()  # Add ObjectId
    user_dict["password"] = hashed_password  # Store the hashed password

    # Insert into the database
    await users_collection.insert_one(user_dict)

    # Remove the password before returning user data
    user_dict.pop("password", None)
    
    return UserResponse(**user_dict, id=str(user_dict["_id"]))


@router.get("/{id}", response_model=UserResponse)
async def get_user(id: str):
    """Get user details by ID (without password)"""
    user = await users_collection.find_one({"_id": ObjectId(id)})
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    user.pop("password", None)  # 🔥 Remove password before returning
    return UserResponse(**user, id=str(user["_id"]))


@router.get("/", response_model=list[UserResponse])
async def get_all_users():
    """Get all users (without passwords)"""
    users = await users_collection.find().to_list(100)
    
    for user in users:
        user.pop("password", None)  # 🔥 Remove passwords
    
    return [UserResponse(**user, id=str(user["_id"])) for user in users]

@router.patch("/{id}", response_model=UserResponse)
async def update_user(id: str, user_update: UserUpdate):
    """Update user details (hash new password if provided)"""

    update_data = {k: v for k, v in user_update.dict(exclude_unset=True).items() if v is not None}

    if "password" in update_data:
        update_data["password"] = hash_password(update_data["password"])  # 🔥 Hash new password

    if not update_data:
        raise HTTPException(status_code=400, detail="No valid fields to update")

    updated_user = await users_collection.find_one_and_update(
        {"_id": ObjectId(id)}, {"$set": update_data}, return_document=True
    )

    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")

    updated_user.pop("password", None)  # 🔥 Remove password before returning
    return UserResponse(**updated_user, id=str(updated_user["_id"]))

@router.delete("/{id}")
async def delete_user(id: str):
    """Delete a user"""
    result = await users_collection.delete_one({"_id": ObjectId(id)})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    
    return {"message": "User deleted successfully"}
