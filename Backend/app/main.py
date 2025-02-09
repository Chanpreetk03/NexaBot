from fastapi import FastAPI
from app.routes.user import router as UserRouter
from app.routes.event import router as EventRouter
from app.routes.chat import router as ChatRouter 
from app.routes.login import router as LoginRouter
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace * with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root Route
@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI Backend!"}


# Include routers for users and events
app.include_router(UserRouter, prefix="/users", tags=["Users"])
app.include_router(EventRouter, prefix="/events", tags=["Events"])
app.include_router(ChatRouter, prefix="/chat", tags=["Chat"])  
app.include_router(LoginRouter, prefix="/login", tags=["Auth"])

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)