import React, { useState } from "react";
import axios from 'axios'; // Import Axios
import "./SearchBar.css";
import CustomNavbar from "../Main/CustomNavbar";
import RecipeCard from "../Cards/RecipeCard";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    axios.post('http://your-fastapi-backend-url/search', { query: searchQuery })
      .then(response => {
        // Handle successful response from backend
        console.log('Search results:', response.data);
        // Update state or do something else with the data
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching search results:', error);
      });
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <CustomNavbar />
      <h4>
        Not sure what to cook today? Browse our full library of delicious recipe
        ideas
      </h4>
      <div
        className="search-container"
        style={{ backgroundImage: "../../assets/Images/image3.jpg" }}
      >
        <div className="container h-screen flex justify-center items-center">
          <div className="relative">
            <div className="search-icon">
              <i className="fas fa-search"></i>
            </div>

            <input
              type="text"
              className="search-input"
              placeholder="Enter a recipe name..."
              value={searchQuery}
              onChange={handleChange}
            />
            <div className="search-button">
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <RecipeCard searchQuery={searchQuery} />
    </div>
  );
}

export default SearchBar;
