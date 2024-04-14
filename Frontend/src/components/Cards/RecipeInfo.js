import React, { useState } from "react";
import "./RecipeInfo.css";
import { FaRegClock, FaUtensils, FaPlay, FaShoppingCart } from "react-icons/fa";
import SampleRecipe1 from "../../assets/Images/SampleRecipe1.jpg";
import CustomNavbar from "../Main/CustomNavbar";

function RecipeInfo() {
  const [activeTab, setActiveTab] = useState("Ingredients");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="background-info">
      <CustomNavbar />
      <div className="recipe-title">
        <h2>Paneer</h2>
      </div>

      <p className="short-description">
        <strong>Paneer</strong> Vegetable Curry is a flavorful and wholesome
        dish that combines the richness of paneer{" "}
        <strong>(Indian cottage cheese)</strong>
        with a medley of colorful vegetables. This vegetarian curry is not only
        delicious but also packed with essential nutrients. It's an excellent
        choice for a hearty and satisfying meal.
      </p>

      <div className="info">
        <div className="image-box">
          <img className="recipe-img" src={SampleRecipe1} alt="" />
        </div>

        <div className="details">
          <ul>
            <li>Recipe Name :</li>
            <li>Recipe Category :</li>
            <li>Cuisine Type :</li>
            <li>Meal Type :</li>
            <li>Diet Label :</li>
            <li>Health Label :</li>
          </ul>

          <div className="cook-servings">
            <span className="detail-icon">
              <FaRegClock size={18} />
            </span>
            <p>Prep/Cooking Time : 30 min</p>

            <span className="detail-icon">
              <FaUtensils size={18} />
            </span>
            <p>Serves : 8</p>
          </div>


          {/* online food order button */}
          <button className="foodorder" onClick={() => window.open("https://www.swiggy.com", "_blank")}>
  <FaShoppingCart /> Buy this meal from swiggy
</button>


        </div>
      </div>

      <div className="information">
        <div className="detailed-info">
          <p
            className={`info-link ${
              activeTab === "Ingredients" ? "active-link" : ""
            }`}
            onClick={() => handleTabClick("Ingredients")}
          >
            Ingredients
          </p>
          <p
            className={`info-link ${
              activeTab === "Instruction" ? "active-link" : ""
            }`}
            onClick={() => handleTabClick("Instruction")}
          >
            Instruction
          </p>
          <p
            className={`info-link ${
              activeTab === "NutritionInfo" ? "active-link" : ""
            }`}
            onClick={() => handleTabClick("NutritionInfo")}
          >
            Nutrition Insights
          </p>
        </div>

        <div
          className={`info-content ${
            activeTab === "Ingredients" ? "active-info" : ""
          }`}
        >
          <ul className="ingredient-list">
            <li>200 grams paneer (cubed)</li>
            <li>
              1 cup mixed vegetables (e.g., peas, carrots, bell peppers, and
              cauliflower), chopped
            </li>
            <li>1 large onion, finely chopped</li>
            <li>1 large tomato, finely chopped</li>
            <li>1 tablespoon ginger-garlic paste</li>
            <li>1/2 cup tomato puree</li>
            <li>1/2 cup yogurt (curd)</li>
            <li>1 teaspoon cumin seeds</li>
            <li>1 teaspoon turmeric powder</li>
            <li>1 teaspoon red chili powder (adjust to taste)</li>
            <li>1 teaspoon garam masala</li>
            <li>1/2 teaspoon coriander powder</li>
            <li>Salt to taste</li>
            <li>Cooking oil</li>
            <li>Fresh coriander leaves for garnish</li>
          </ul>
        </div>

        <div
          className={`info-content ${
            activeTab === "Instruction" ? "active-info" : ""
          }`}
        >
          <ol className="instruction-list">
            <li>Heat oil in a pan. Add cumin seeds and let them splutter.</li>
            <li>Add chopped onions and sauté until golden brown.</li>
            <li>
              Add ginger-garlic paste and sauté for a minute until the raw smell
              disappears.
            </li>
            <li>
              Add chopped tomatoes and cook until they become soft and the oil
              starts to separate.
            </li>
            <li>
              Add tomato puree, turmeric powder, red chili powder, coriander
              powder, and salt. Mix well and cook for a few minutes.
            </li>
            <li>
              Add mixed vegetables and cook until they are slightly tender.
            </li>
            <li>Add yogurt (curd) and stir continuously to avoid curdling.</li>
            <li>
              Add paneer cubes and garam masala. Mix gently to coat the paneer
              and vegetables with the masala.
            </li>
            <li>
              Cook for a few more minutes until the vegetables are cooked, and
              the paneer is heated through.
            </li>
            <li>Garnish with fresh coriander leaves.</li>
            <li>
              Serve the vegetable paneer hot with rice or Indian bread (roti,
              naan).
            </li>
          </ol>
        </div>

        <div
          className={`info-content ${
            activeTab === "NutritionInfo" ? "active-info" : ""
          }`}
        >
          <table>
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Amount per Serving</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>350 kcal</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>18 g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>25 g</td>
              </tr>
              <tr>
                <td>Saturated Fat</td>
                <td>12 g</td>
              </tr>
              <tr>
                <td>Carbohydrates</td>
                <td>15 g</td>
              </tr>
              <tr>
                <td>Fiber</td>
                <td>4 g</td>
              </tr>
              <tr>
                <td>Sugar</td>
                <td>6 g</td>
              </tr>
              <tr>
                <td>Cholesterol</td>
                <td>45 mg</td>
              </tr>
              <tr>
                <td>Sodium</td>
                <td>550 mg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="recipe-video">
        <div className="video-description">
          <p>
            <FaPlay size={24} style={{ color: "red" }} /> Watch the video below
            to see how to prepare this delicious Paneer Vegetable Curry.
          </p>
        </div>

        <iframe
          title="Recipe Video"
          src={`https://www.youtube.com/watch?v=nPn_JS1lk4c&t=13s`}
        ></iframe>
      </div>
    </div>
  );
}

export default RecipeInfo;
