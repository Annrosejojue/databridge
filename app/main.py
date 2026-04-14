from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import user, upload, matching
from app.core.database import Base, engine

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router)
app.include_router(upload.router)
app.include_router(matching.router)

@app.get("/")
def root():
    return {"status": "online"}

Base.metadata.create_all(bind=engine)