import IngredientsCards from "components/IngredientsCards/IngredientsCards";
import Wrapper from "HOC/Wrapper/Wrapper";
import React from "react";

function Home() {
  return (
    <Wrapper bodyStyles={{ padding: "15px 32px" }}>
      <p className="light-black fs-35px weight-7 mb-15">Ingredients</p>
      <IngredientsCards />
      <IngredientsCards />
      <IngredientsCards />
    </Wrapper>
  );
}

export default Home;
