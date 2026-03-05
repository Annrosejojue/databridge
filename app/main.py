from fastapi import FastAPI
from app.core.database import Base, engine

app = FastAPI(title="DataBridge AI")

# Temporary: auto-create tables (later replaced by Alembic)
Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "DataBridge AI backend is running"}
