# recipe.py
from fastapi import APIRouter, HTTPException
from fastapi import FastAPI, HTTPException, Depends
from db import MongoDBSession
from models import Recipe,RecipeSchema
from crud import create_recipe,delete_recipe,read_recipes,read_recipe,update_recipe
from typing import List
from auth import get_current_user


router = APIRouter()



# Routes
@router.get('/recipe', response_model=RecipeSchema)
def get_recipes(session: MongoDBSession = Depends(),current_user: dict = Depends(get_current_user)):
    with session:
        user = read_recipes()
    return user

@router.get('/recipe/{recipe_id}', response_model=RecipeSchema)
def get_recipe(recipe_id: str, session: MongoDBSession = Depends(),current_user: dict = Depends(get_current_user)):
    with session:
        user = read_recipe(recipe_id)
    if user:
        return user
    raise HTTPException(status_code=404, detail='User not found')

@router.post('/recipes', response_model=RecipeSchema, status_code=201)
def add_recipe( recipe:RecipeSchema, session: MongoDBSession = Depends()):
    with session:
        print(f"{recipe.recipeName},{recipe.ingredients},{recipe.instructions},{recipe.category}")
        user = create_recipe(recipe.recipeName,recipe.ingredients,recipe.instructions,recipe.category)
    return user

@router.put('/recipes/{recipe_id}', response_model=RecipeSchema)
def update_existing_recipe(recipe_id: str,  recipe_name:str,ingredients:str,instruction:str, session: MongoDBSession = Depends(),current_user: dict = Depends(get_current_user)):
    with session:
        user = update_recipe(recipe_id,recipe_name,ingredients,instruction)
    if user:
        return user
    raise HTTPException(status_code=404, detail='User not found')

@router.delete('/recipes/{recipe_id}', status_code=200)
def remove_recipe(recipe_id: str, session: MongoDBSession = Depends(),current_user: dict = Depends(get_current_user)):
    with session:
        delete_recipe(recipe_id)
    return {'message': 'User deleted'}
