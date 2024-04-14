# main.py
from fastapi import FastAPI, HTTPException, Depends
from db import MongoDBSession
from models import User,UserSchema,UserLogin
from crud import create_user, read_users, read_user, update_user, delete_user
from typing import List

import user
import recipe
from auth import create_access_token
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"]


)

@app.get("/")
def root():
    return "hello"

@app.post('/token')
def login(user_info: UserLogin,session: MongoDBSession = Depends()):
    with session:
        print(f"{user_info.username}  {user_info.password}")
        user = User.objects(email_address=user_info.username).first()
        if not user:
            raise HTTPException(status_code=401, detail="Invalid email or password")

        # Check if the password matches
        if user.password != user_info.password:  # Note: You should hash the passwords before storing them in the database
            raise HTTPException(status_code=401, detail="Invalid email or password")

        # Generate access token
        token = create_access_token({"sub": user_info.username})
    return {"access_token": token, "token_type": "bearer"}

app.include_router(user.router)
app.include_router(recipe.router)
