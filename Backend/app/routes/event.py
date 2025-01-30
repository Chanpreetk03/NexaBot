from fastapi import APIRouter, HTTPException
from bson import ObjectId
from app.database import database
from app.schemas.event import EventCreate, EventUpdate, EventResponse

router = APIRouter()
events_collection = database["events"]

@router.post("/", response_model=EventResponse)
async def create_event(event: EventCreate):
    """Create a new event"""
    new_event = await events_collection.insert_one(event.dict())
    created_event = await events_collection.find_one({"_id": new_event.inserted_id})
    
    return EventResponse(**created_event)

@router.get("/{id}", response_model=EventResponse)
async def get_event(id: str):
    """Get event details by ID"""
    event = await events_collection.find_one({"_id": ObjectId(id)})
    
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    return EventResponse(**event)

@router.get("/", response_model=list[EventResponse])
async def get_all_events():
    """Get all events"""
    events = await events_collection.find().to_list(100)
    return [EventResponse(**event) for event in events]

@router.patch("/{id}", response_model=EventResponse)
async def update_event(id: str, event_update: EventUpdate):
    """Update event details"""
    update_data = {k: v for k, v in event_update.dict(exclude_unset=True).items() if v is not None}

    if not update_data:
        raise HTTPException(status_code=400, detail="No valid fields to update")

    updated_event = await events_collection.find_one_and_update(
        {"_id": ObjectId(id)}, {"$set": update_data}, return_document=True
    )
    
    if not updated_event:
        raise HTTPException(status_code=404, detail="Event not found")

    return Even
