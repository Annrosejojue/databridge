from fastapi import FastAPI
from app.routers import user
from app.core.database import Base, engine

app = FastAPI()

app.include_router(user.router)

@app.get("/")
def root():
    return {"message": "DataBridge AI backend is running"}

Base.metadata.create_all(bind=engine)
