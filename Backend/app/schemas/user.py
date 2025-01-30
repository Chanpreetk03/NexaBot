from pydantic import BaseModel, EmailStr
from typing import Optional

# Schema for Creating a User
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    phone_number: str
    emergency_contact_name: str
    emergency_contact_number: str
    isAdmin: bool = False

# Schema for Updating a User (Optional Fields)
class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone_number: Optional[str] = None
    emergency_contact_name: Optional[str] = None
    emergency_contact_number: Optional[str] = None
    isAdmin: Optional[bool] = None

# Schema for Response (Excluding Sensitive Data)
class UserResponse(BaseModel):
    id: str
    name: str
    email: EmailStr
    phone_number: str
    emergency_contact_name: str
    emergency_contact_number: str
    isAdmin: bool

    class Config:
        from_attributes = True
