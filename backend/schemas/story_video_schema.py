from pydantic import BaseModel

class StoryRequest(BaseModel):
    topic: str

class StoryResponse(BaseModel):
    script: str