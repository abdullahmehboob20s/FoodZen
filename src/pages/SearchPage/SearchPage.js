import React from "react";
import "./SearchPage.css";
import DropDown from "components/DropDown/DropDown";
import TitleBar from "components/TitleBar/TitleBar";
import Wrapper from "HOC/Wrapper/Wrapper";
import DishCard from "components/DishCard/DishCard";
import SearchResultCard from "components/SearchResultCard/SearchResultCard";

function SearchPage() {
  let searchResult = [
    // {
    //   id: 23572,
    //   value: "Onion",
    // },
  ];

  return (
    <Wrapper
      bodyStyles={{
        padding: "15px 1.875rem",
        marginTop: "72px",
      }}
    >
      <div className="dropdowns mb-30">
        <DropDown btnTitle="Ingredients" />
        <DropDown btnTitle="Cuisine" />
        <DropDown btnTitle="Ingredients Group" />
        <DropDown btnTitle="Difficulty" />
        <DropDown btnTitle="Time" />
        <DropDown btnTitle="Category" position="right" />
        <DropDown btnTitle="Course" position="right" />
      </div>

      <div>
        <div className="mb-30">
          {searchResult.length > 0 ? (
            <div className="search-result-bar">
              <p className="fs-20px weight-6">Results 23572 : </p>
              <div className="serach-result-card-wrapper">
                {searchResult.map((card, index) => (
                  <SearchResultCard key={card.id} value={card.value} />
                ))}
              </div>
            </div>
          ) : (
            <TitleBar
              title="Popular Recipes To Satify your Cravings"
              fontSize="fs-20px"
              weight="weight-5"
            />
          )}
        </div>

        <div className="dishes">
          {new Array(12).fill("").map((card, index) => (
            <DishCard />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default SearchPage;
