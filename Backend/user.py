# user.py# main.py
from fastapi import APIRouter, HTTPException, Depends
from db import MongoDBSession
from models import User,UserSchema
from crud import create_user, read_users, read_user, update_user, delete_user
from typing import List
from auth import get_current_user

router = APIRouter()


# Routes
@router.get('/users', response_model=UserSchema)
def get_users(session: MongoDBSession = Depends(),current_user: dict = Depends(get_current_user)):
    with session:
        user = read_users()
    return user

@router.get('/users/{user_id}', response_model=UserSchema)
def get_user(user_id: str, session: MongoDBSession = Depends(),current_user: dict = Depends(get_current_user)):
    with session:
        user = read_user(user_id)
    if user:
        return user
    raise HTTPException(status_code=404, detail='User not found')

@router.post('/users', response_model=UserSchema, status_code=201)
def add_user( user:UserSchema, session: MongoDBSession = Depends()):
    with session:
        print(f"{user.firstname},{user.lastname},{user.email_address},{user.username},{user.password}")
        user = create_user(user.firstname,user.lastname,user.email_address,user.username,user.password)
    return user

@router.put('/users/{user_id}', response_model=UserSchema)
def update_user(user_id: str,  firstname:str,    lastname:str,    email_address:str,    username:str,    password:str, session: MongoDBSession = Depends(),current_user: dict = Depends(get_current_user)):
    with session:
        user = update_user(user_id,firstname,lastname,email_address,username,password)
    if user:
        return user
    raise HTTPException(status_code=404, detail='User not found')

@router.delete('/users/{user_id}', status_code=200)
def remove_user(user_id: str, session: MongoDBSession = Depends(),current_user: dict = Depends(get_current_user)):
    with session:
        delete_user(user_id)
    return {'message': 'User deleted'}
