import React from "react";
import "./IngredientsCard.css";
import measurementIcon from "assets/images/measurement-icon.png";

function IngredientsCard(props) {
  return (
    <div className="ingredient-card">
      <div className="ingredient-card-img">
        <img src={props.img} alt="" />
      </div>
      <div className="ingredient-card-content">
        <p className="weight-6 fs-18px ingredient-title">Cardamom</p>
        <div className="ingredient-weight">
          <img src={measurementIcon} alt="" />
          <p className="fs-13px light-black ">2 kgs</p>
        </div>
      </div>
    </div>
  );
}

export default IngredientsCard;
