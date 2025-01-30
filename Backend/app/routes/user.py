from fastapi import APIRouter, HTTPException
from app.database import database
from app.models.user import UserModel
from bson import ObjectId

router = APIRouter()
users_collection = database["users"]

@router.post("/", response_model=UserModel)
async def create_user(user: UserModel):
    existing_user = await users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already exists")

    new_user = await users_collection.insert_one(user.dict(by_alias=True))
    return await users_collection.find_one({"_id": new_user.inserted_id})

@router.get("/{id}", response_model=UserModel)
async def get_user(id: str):
    user = await users_collection.find_one({"_id": ObjectId(id)})
    if user:
        return user
    raise HTTPException(status_code=404, detail="User not found")

@router.get("/", response_model=list[UserModel])
async def get_all_users():
    users = await users_collection.find().to_list(100)
    return users

@router.delete("/{id}")
async def delete_user(id: str):
    result = await users_collection.delete_one({"_id": ObjectId(id)})
    if result.deleted_count:
        return {"message": "User deleted"}
    raise HTTPException(status_code=404, detail="User not found")
