import React from "react";
import "./TitleBar.css";

function TitleBar(props) {
  return (
    <div className="food-item-card-title fs-18px weight-7 mb-15">
      {props.img}
      {props.title}
    </div>
  );
}

export default TitleBar;
