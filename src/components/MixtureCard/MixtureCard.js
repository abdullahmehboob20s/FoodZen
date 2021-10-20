import React from "react";
import "./MixtureCard.css";

function Image({ img }) {
  return <img src={img} alt="" />;
}

function MixtureCard(props) {
  return (
    <div className="mixture-card">
      <div className="mixture-card-images">
        <Image img={props.mixtureItems[0]} />
        <div className="add-sign"></div>
        <Image img={props.mixtureItems[1]} />
      </div>
      <div className="mixture-card-title fs-15px">
        Do you think Zucchini is correct ingredients for zucchini fritters?
      </div>

      <div className="mixture-card-btns">
        <button className="fs-15px">Yes, I agree</button>
        <button className="fs-15px">No, I don’t</button>
      </div>
    </div>
  );
}

export default MixtureCard;
