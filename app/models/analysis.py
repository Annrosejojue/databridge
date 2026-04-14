from sqlalchemy import Column, Integer, String, JSON, ForeignKey
from app.core.database import Base

class Analysis(Base):
    __tablename__ = "analyses"
    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String)
    maturity_score = Column(Integer)
    recommendations = Column(JSON)
    user_id = Column(Integer, ForeignKey("users.id"))