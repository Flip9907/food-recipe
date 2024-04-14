import React, { useState } from "react";
import "./Profile.css";
import dummyProfilePhoto from "../../assets/Images/download.jpg";
import CustomNavbar from "../Main/CustomNavbar";

const Profile = () => {
  const [openContent, setOpenContent] = useState(null);
  const uploadedRecipes = [
    { title: "Recipe 1", description: "Description for Recipe 1" },
    { title: "Recipe 2", description: "Description for Recipe 2" },
  ];

  const savedRecipes = [
    { title: "Saved Recipe 1", description: "Description for Saved Recipe 1" },
    { title: "Saved Recipe 2", description: "Description for Saved Recipe 2" },
  ];

  const isOpen = (content) => openContent === content;

  const toggleContent = (content) => {
    setOpenContent(isOpen(content) ? null : content);
  };

  return (
    <>
      <CustomNavbar />
      <h3 className="my-profile">My Profile</h3>
      <div className="profile-container">
        <div className="profile-section user-info">
          <img src={dummyProfilePhoto} alt="Profile" />
          <div className="user-details">
            <h2>User Name</h2>
            <p>Email: user@example.com</p>
          </div>
        </div>

        <div className="profile-section">
          <div
            className={`content-box ${isOpen("personalInfo") ? "open" : ""}`}
            onClick={() => toggleContent("personalInfo")}
          >
            <h4>Personal Info</h4>
            <div className="content">
              <p>First Name: abc</p>
              <p>Last Name: abc</p>
              <p>Username: abcxyz</p>
              <p>Email ID: john@example.com</p>
            </div>
          </div>

          <div
            className={`content-box ${isOpen("uploadedRecipes") ? "open" : ""}`}
            onClick={() => toggleContent("uploadedRecipes")}
          >
            <h4>Uploaded Recipes ({uploadedRecipes.length})</h4>
            <div className="content">
              {uploadedRecipes.map((recipe, index) => (
                <div className="uploaded-recipe-card" key={index}>
                  <h4>{recipe.title}</h4>
                  <p>{recipe.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`content-box ${isOpen("savedRecipes") ? "open" : ""}`}
            onClick={() => toggleContent("savedRecipes")}
          >
            <h4>Liked Recipes</h4>
            <div className="content">
              {savedRecipes.map((recipe, index) => (
                <div className="uploaded-recipe-card" key={index}>
                  <h4>{recipe.title}</h4>
                  <p>{recipe.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;