# crud.py
from models import User,Recipe

def create_user(firstname, lastname,email_address, username,password):
    user = User(firstname=firstname,lastname=lastname, email_address=email_address, username=username, password=password)
    user.save()
    return user

def read_users():
    return User.objects()

def read_user(user_id):
    return User.objects(id=user_id).first()

def update_user(user_id, firstname=None, lastname=None, email_address=None, username=None,password=None):
    user = User.objects(id=user_id).first()
    if user:
        if firstname:
            user.firstname = firstname
        if lastname:
            user.lastname = lastname
        if email_address:
            user.email_address = email_address
        if username:
            user.username = username
        if password:
            user.password=password
        user.save()
    return user

def delete_user(user_id):
    user = User.objects(id=user_id).first()
    if user:
        user.delete()

def create_recipe(recipeName,ingredients,instructions,category):
    recipe = Recipe(recipeName=recipeName,ingredients=ingredients,instructions=instructions,category=category)
    recipe.save()
    return recipe

def read_recipes():
    return Recipe.objects()

def read_recipe(recipe_id):
    return Recipe.objects(id=recipe_id).first()

def update_recipe(recipe_id, recipe_name=None,ingredients=None,instruction=None):
    recipe = Recipe.objects(id=recipe_id).first()
    if recipe:
        if recipe_name:
            recipe.recipe_name = recipe_name
        if instruction:
            recipe.instruction = instruction
        if ingredients:
            recipe.email_address = ingredients

        recipe.save()
    return recipe

def delete_recipe(recipe_id):
    recipe = Recipe.objects(id=recipe_id).first()
    if recipe:
        recipe.delete()
