from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
import random

router = APIRouter()

ALLOWED_IMAGE_EXTENSIONS = {"image/jpeg", "image/png", "image/jpg"}

@router.post("/upload-image/")
async def upload_image(file: UploadFile = File(...)):
    if file.content_type not in ALLOWED_IMAGE_EXTENSIONS:
        raise HTTPException(status_code=400, detail="Invalid file type")
    
    classification = random.choice(["OK", "NOK"])
    
    return JSONResponse(content={"classification": classification})
