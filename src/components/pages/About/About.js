//Imports
import React from "react";
import "./About.css";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          alt="About Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">
        </p>
        <p id="p-about">
          {" "}
        </p>
        <p id="p-about">
          
        </p>
        <p id="p-about">
          
        </p>
        <p id="p-about">
          
        </p>
      </div>
    </>
  );
}