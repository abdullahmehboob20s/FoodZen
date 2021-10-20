import React from "react";
import "./CookingProcessCard.css";

function CookingProcessCard(props) {
  return (
    <div className="cooking-process-card">
      <div>
        <div className="cooking-process-count fs-25px">{props.order + 1}</div>
      </div>
      <p className="cooking-process-disc fs-15px light-black weight-4">
        To marinate the chicken for the biryani, combine the vegetable oil,
        garlic, ginger, chili peppers, mint, cilantro, garam masala, cinnamon
        and salt in a large bowl and stir together. Add the chicken pieces and
        toss together making sure the chicken is thoroughly coated in the
        marinade. Allow the chicken to marinate for at least 1 hour or up to
        overnight.
      </p>
    </div>
  );
}

export default CookingProcessCard;
