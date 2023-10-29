import React, { useState } from "react";
import Data from "../Data";
import Category from "../Categories";
import "./SearchBar.css";

const allCategories = ["all", ...new Set(Data.map((item) => item.Category))];

function List({ input, filterItems, reviewsdata }) {
  const allCategories = [
    "all",
    ...new Set(reviewsdata.map((item) => item.title)),
  ];
  let categoriesToDisplay = allCategories;
  let empty = false;
  if (input !== "") {
    categoriesToDisplay = allCategories.filter((el) => {
      const lowerText = el ? el.toLowerCase() : "";
      return lowerText.includes(input.toLowerCase());
    });
  }


  if (categoriesToDisplay.length === 0) {
    empty = true;
    return <h2>No matching topics</h2>;
  }

  return (
    <div className="btn-container">
      {categoriesToDisplay.map((category, index) => {
        return (
          <Category
            index={index}
            category={category}
            filterItems={filterItems}
            empty={empty}
          />
        );
      })}
    </div>
  );
}

export default List;
