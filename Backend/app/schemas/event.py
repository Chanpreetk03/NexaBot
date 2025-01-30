from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

# Schema for Creating an Event
class EventCreate(BaseModel):
    event_name: str
    event_organizer: str
    event_description: str
    event_participants: List[str]  # List of User IDs
    event_start_time: datetime
    event_duration: int  # Duration in minutes
    event_link: str

# Schema for Updating an Event
class EventUpdate(BaseModel):
    event_name: Optional[str] = None
    event_organizer: Optional[str] = None
    event_description: Optional[str] = None
    event_participants: Optional[List[str]] = None
    event_start_time: Optional[datetime] = None
    event_duration: Optional[int] = None
    event_link: Optional[str] = None

# Schema for Response
class EventResponse(BaseModel):
    id: str
    event_name: str
    event_organizer: str
    event_description: str
    event_participants: List[str]
    event_start_time: datetime
    event_duration: int
    event_link: str

    class Config:
        from_attributes = True
