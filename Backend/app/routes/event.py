from fastapi import APIRouter, HTTPException
from app.database import database
from app.models.event import EventModel
from bson import ObjectId

router = APIRouter()
events_collection = database["events"]

@router.post("/", response_model=EventModel)
async def create_event(event: EventModel):
    new_event = await events_collection.insert_one(event.dict(by_alias=True))
    return await events_collection.find_one({"_id": new_event.inserted_id})

@router.get("/{id}", response_model=EventModel)
async def get_event(id: str):
    event = await events_collection.find_one({"_id": ObjectId(id)})
    if event:
        return event
    raise HTTPException(status_code=404, detail="Event not found")

@router.get("/", response_model=list[EventModel])
async def get_all_events():
    events = await events_collection.find().to_list(100)
    return events

@router.delete("/{id}")
async def delete_event(id: str):
    result = await events_collection.delete_one({"_id": ObjectId(id)})
    if result.deleted_count:
        return {"message": "Event deleted"}
    raise HTTPException(status_code=404, detail="Event not found")
