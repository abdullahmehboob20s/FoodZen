import React from "react";
import "./CircleCard.css";

function CircleCard(props) {
  return (
    <div className="circle-card-wrapper">
      <div className="circle-card" style={props.style}>
        {props.content}
      </div>
      {props.title ? (
        <p className="fs-16px weight-4 light-black">{props.title}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default CircleCard;
