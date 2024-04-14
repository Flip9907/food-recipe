# models.py
from mongoengine import Document, StringField
from pydantic import BaseModel
class User(Document):
    firstname = StringField(required=True)
    lastname = StringField(required=True)
    email_address = StringField(required=True,unique=True)
    username = StringField(required=True)
    password = StringField(required=True)

class UserSchema(BaseModel):
    firstname:str
    lastname:str
    email_address:str
    username:str
    password:str

    class Config:
        from_attributes = True

class Recipe(Document):
    recipeName=StringField(required=True)
    ingredients=StringField(required=True)
    instructions=StringField(required=True)
    category=StringField(required=False)

class RecipeSchema(BaseModel):
    recipeName:str
    ingredients:str
    instructions:str
    category:str

    class Config:
        from_attributes=True


class UserLogin(BaseModel):
    username: str
    password: str

