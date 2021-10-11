import React from "react";
import "./switch.css";

export const Switch = ({ state, onClick: handleChange, option1, option2, title }) => (
  <div className="root">
    <p>{option1}</p>
    <div className="switchContainer">
      <p>{title}</p>
      <div
        className={`pill ${state ? "active" : ""}`}
        onClick={() => handleChange()}
      >
        <div className="slider" />
      </div>
    </div>
    <p>{option2}</p>
  </div>
);
