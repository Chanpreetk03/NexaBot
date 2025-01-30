from bson import ObjectId
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class EventModel(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    event_name: str
    event_organizer: str
    event_description: str
    event_participants: List[str]  # List of user IDs
    event_start_time: datetime
    event_duration: int  # Duration in minutes
    event_link: str

    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}
