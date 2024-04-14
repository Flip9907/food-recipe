import React, { useState } from "react";
import CustomNavbar from "../Main/CustomNavbar";
import Axios from "axios";
import "./UploadRecipe.css";

const UploadRecipe = () => {
  const [formData, setFormData] = useState({
    recipeName: "",
    ingredients: "",
    instructions: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("http://localhost:8000/recipes", {
        recipeName: formData.recipeName,
        ingredients: formData.ingredients,
        instructions: formData.instructions,
        category: formData.category, // Include category in the data sent to the server
      });

      // Check if upload was successful
      if (response.status === 200) {
        // Reset form after successful upload
        setFormData({
          recipeName: "",
          ingredients: "",
          instructions: "",
          category: ""
        });
        // Display success message
        alert("Recipe uploaded successfully!");
      } else {
        alert("Recipe Uploaded successfully.");
      }
    } catch (error) {
      console.error("Error:", error.response.data);
      alert("Failed to upload recipe. Please try again.");
    }
  };

  return (
    <>
      <CustomNavbar />
      <form onSubmit={handleSubmit} className="upload-form">
        <h1 className="upload-recipe-heading">Upload a Recipe</h1>
        <label>
          Recipe Name:
          <input
            type="text"
            name="recipeName"
            value={formData.recipeName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Ingredients:
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Instructions:
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Recipe Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="select-category"
          >
            <option value="">Select Category</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
            <option value="vegan">Vegan</option>
            <option value="gluten">Gluten</option>
            <option value="dessert">Dessert</option>
            <option value="breakfast">Breakfast</option>
          </select>
        </label>
        <br />

        <br />
        <div className="center-button">
          <button type="submit" className="upload-btn">
            Upload Recipe
          </button>
        </div>
      </form>
    </>
  );
};

export default UploadRecipe;
