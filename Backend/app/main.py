from fastapi import FastAPI
from app.routes.user import router as UserRouter
from app.routes.event import router as EventRouter

app = FastAPI()

app.include_router(UserRouter, prefix="/users", tags=["Users"])
app.include_router(EventRouter, prefix="/events", tags=["Events"])
