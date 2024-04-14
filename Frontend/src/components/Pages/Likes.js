import React from "react";
import "./Likes.css";
import CustomNavbar from "../Main/CustomNavbar";

function likes() {
  return (
    <>
      <CustomNavbar />
      <div>
        <h3 className="title-like">Liked Recipes</h3>
      </div>
    </>
  );
}

export default likes;
