from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/upload", tags=["Upload"])

@router.post("")
async def upload_file(file: UploadFile = File(...)):
    # Basic "AI" processing placeholder
    contents = await file.read()
    size_kb = round(len(contents) / 1024, 2)

    result = {
        "filename": file.filename,
        "content_type": file.content_type,
        "size_kb": size_kb,
        "summary": "File received and basic analysis completed.",
    }

    return JSONResponse(content=result)
