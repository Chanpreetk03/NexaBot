from bson import ObjectId
from pydantic import BaseModel, EmailStr, Field
from typing import Optional 
from app.utils.auth import hash_password

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class UserModel(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    name: str
    email: EmailStr
    password: str  # 🔥 Added password field
    phone_number: str
    emergency_contact_name: str
    emergency_contact_number: str
    isAdmin: bool = False

    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}

    def hash_password(self):
        """Hashes the user's password before storing."""
        self.password = hash_password(self.password)
