from fastapi import APIRouter, HTTPException
from bson import ObjectId
from app.database import get_database
from app.schemas.event import EventCreate, EventUpdate, EventResponse


router= APIRouter()
# Get database instance
database = get_database()
events_collection = database["events"]

@router.post("/", response_model=EventResponse)
async def create_event(event: EventCreate):
    """Create a new event"""
    event_dict = event.dict()
    event_dict["_id"] = ObjectId()
    await events_collection.insert_one(event_dict)
    
    return EventResponse(**event_dict, id=str(event_dict["_id"]))

@router.get("/{id}", response_model=EventResponse)
async def get_event(id: str):
    """Get event details by ID"""
    event = await events_collection.find_one({"_id": ObjectId(id)})
    
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    return EventResponse(**event, id=str(event["_id"]))

@router.get("/", response_model=list[EventResponse])
async def get_all_events():
    """Get all events"""
    events = await events_collection.find().to_list(100)
    return [EventResponse(**event, id=str(event["_id"])) for event in events]

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

    return EventResponse(**updated_event, id=str(updated_event["_id"]))

@router.delete("/{id}")
async def delete_event(id: str):
    """Delete an event"""
    result = await events_collection.delete_one({"_id": ObjectId(id)})

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Event not found")

    return {"message": "Event deleted successfully"}
