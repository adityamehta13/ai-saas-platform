from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes.story_video import router as story_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(story_router)

@app.get("/")
def root():
    return {"message": "Backend Running Successfully"}