from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# MongoDB URI
MONGO_URI = os.getenv("MONGO_URI")

if not MONGO_URI:
    raise ValueError("⚠️ MONGO_URI is not set in .env file!")

# Create MongoDB Client and Database
client = AsyncIOMotorClient(MONGO_URI)
database = client.get_database()  # Automatically selects the database

print("✅ Connected to MongoDB Atlas")

# Function to get database instance
def get_database():
    return database
