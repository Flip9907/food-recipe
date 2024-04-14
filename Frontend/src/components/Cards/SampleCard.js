import React, { useState } from "react";
import "./RecipeCard.css";
import { FaRegClock, FaUtensils } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Import AiFillHeart for filled heart icon
import { useNavigate } from "react-router-dom";
import SampleRecipe1 from "../../assets/Images/SampleRecipe1.jpg";
import SampleRecipe2 from "../../assets/Images/SampleRecipe2.jpg";
import SampleRecipe3 from "../../assets/Images/SampleRecipe3.jpg";
import SampleRecipe5 from "../../assets/Images/SampleRecipe5.jpg";

const recipeData = [
  {
    title: "Paneer",
    image: SampleRecipe1,
    cuisineType: "Indian",
    dietLabel: "Vegetarian",
    cookTime: "30 mins",
    servings: 4,
  },
  {
    title: "Biryani",
    image: SampleRecipe2,
    cuisineType: "Indian",
    dietLabel: "Non-Vegetarian",
    cookTime: "1 hr",
    servings: 6,
  },
  {
    title: "Chocolate Cake",
    image: SampleRecipe3,
    cuisineType: "Indian",
    dietLabel: "Vegetarian",
    cookTime: "30 mins",
    servings: 4,
  },
  {
    title: "Chocolate Cakessss",
    image: SampleRecipe3,
    cuisineType: "Indian",
    dietLabel: "Vegetarian",
    cookTime: "30 mins",
    servings: 4,
  },
  {
    title: "Egg Curry",
    image: SampleRecipe5,
    cuisineType: "Indian",
    dietLabel: "Non-Vegetarian",
    cookTime: "1 hr",
    servings: 6,
  },
  {
    title: "Egg Curryg",
    image: SampleRecipe5,
    cuisineType: "Indian",
    dietLabel: "Non-Vegetarian",
    cookTime: "1 hr",
    servings: 7,
  },
  {
    title: "Egg kikCurryg",
    image: SampleRecipe5,
    cuisineType: "Indian",
    dietLabel: "Non-Vegetarian",
    cookTime: "1 hr",
    servings: 7,
  },


];

function SampleCard() {
  let navigate = useNavigate();

  const [likedRecipes, setLikedRecipes] = useState([]);

  const handleImageClick = (title) => {
    navigate(`/recipe/${title.toLowerCase()}`);
  };

  const handleLikeClick = (recipe) => {
    const isLiked = likedRecipes.some((likedRecipe) => likedRecipe.title === recipe.title);
    if (isLiked) {
      const updatedLikedRecipes = likedRecipes.filter((likedRecipe) => likedRecipe.title !== recipe.title);
      setLikedRecipes(updatedLikedRecipes);
    } else {
      const updatedLikedRecipes = [...likedRecipes, recipe];
      setLikedRecipes(updatedLikedRecipes);
    }
  };

  return (
    <>
      <div className="Recipe-Container">
        <h1 className="heading">
          Check out these fabulous <span className="subheading">Dishes</span>
        </h1>
        <p className="para">Where there is good food, there is happiness</p>
      </div>
      <div className="sample-cards">
        {recipeData.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img
              src={recipe.image}
              className="recipe-image1"
              alt=""
              onClick={() => handleImageClick(recipe.title)}
            />

            <div className="recipe-card-title">
              <h3>{recipe.title}</h3>
              <span className="heart-icon" onClick={() => handleLikeClick(recipe)}>
                {likedRecipes.some((likedRecipe) => likedRecipe.title === recipe.title) ? (
                  <AiFillHeart size={21} color="red" />
                ) : (
                  <AiOutlineHeart size={21} />
                )}
              </span>
            </div>

            <p>Cuisine Type: {recipe.cuisineType}</p>
            <p>Diet Label: {recipe.dietLabel}</p>

            <div className="dish-details">
              <span className="detailed-icon">
                <FaRegClock size={18} />
              </span>
              <p>{recipe.cookTime}</p>

              <span className="detailed-icon">
                <FaUtensils size={18} />
              </span>
              <p>{recipe.servings}</p>
            </div>

            <p>Rating: 4.9/5⭐️ (35+ reviews)</p>
            
          </div>
        ))}
      </div>
    </>
  );
}

export default SampleCard;
