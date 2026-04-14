from fastapi import APIRouter, UploadFile, File
from app.services.ml_engine import ml_engine

router = APIRouter(prefix="/api", tags=["Upload"])

@router.post("/upload")
async def upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
    content = await file.read()
    text = content.decode("utf-8", errors="ignore")
    result = ml_engine.analyze_data(text) # Use your ML logic

    # This line saves it to your database!
    db_analysis = Analysis(
        filename=file.filename,
        maturity_score=result["maturity_score"],
        recommendations=result["recommendations"],
        user_id=1 # Link to the user
    )
    db.add(db_analysis)
    db.commit()
    return result
    @router.get("/analyses")
def get_all_analyses(db: Session = Depends(get_db)):
    # This fetches every record saved in your 'analyses' table
    return db.query(Analysis).all()
    