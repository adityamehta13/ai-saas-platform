from fastapi import APIRouter
from schemas.story_video_schema import StoryRequest
from services.story_video.script_gen import generate_story_script

router = APIRouter()

@router.post("/story_video")
def create_story_video(data: StoryRequest):
    script = generate_story_script(data.topic)
    return {"script": script}