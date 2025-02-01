from fastapi import FastAPI
from app.routes.user import router as UserRouter
from app.routes.event import router as EventRouter
from app.routes.chat import router as ChatRouter 

app = FastAPI()

# Root Route
@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI Backend!"}


# Include routers for users and events
app.include_router(UserRouter, prefix="/users", tags=["Users"])
app.include_router(EventRouter, prefix="/events", tags=["Events"])
app.include_router(ChatRouter, prefix="/chat", tags=["Chat"])  

