from fastapi import APIRouter
from app.services.ml_engine import ml_engine

router = APIRouter(prefix="/api/matching", tags=["Matching"])

EXPERTS = [
    {"name": "Dr. Sarah", "skills": "Python, Churn Prediction, AWS", "bio": "Expert in customer analytics."},
    {"name": "James Lee", "skills": "SQL, Tableau, Inventory Management", "bio": "Supply chain data specialist."},
    {"name": "Amaljo", "skills": "Java, Deep Learning, NLP", "bio": "AI Engineer and Lead Developer."}
]

@router.post("/find")
async def find_experts(description: str):
    matches = ml_engine.get_matches(description, EXPERTS)
    return {"matches": matches}