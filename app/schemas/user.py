from pydantic import BaseModel

class UserCreate(BaseModel):
    email: str
    name: str

class UserSignup(BaseModel):
    email: str
    name: str
    password: str

class UserResponse(BaseModel):
    id: int
    email: str
    name: str

    class Config:
        from_attributes = True
        
class UserLogin(BaseModel):
    email: str
    password: str

