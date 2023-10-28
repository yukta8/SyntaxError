import React from "react";
import Data from "../Data";
import Category from "../Categories";
import "./SearchBar.css"

const allCategories = ["all", ...new Set(Data.map((item) => item.Category))];

function List({ input, filterItems }) {
  // Create a variable to hold the data to be displayed
  let categoriesToDisplay = allCategories;

  // Check if there is an input for filtering
  if (input !== "") {
    categoriesToDisplay = allCategories.filter((el) => {
      const lowerText = el ? el.toLowerCase() : "";
      return lowerText.includes(input.toLowerCase());
    });
  }

  return (
    <div className="btn-container">
      {categoriesToDisplay.map((category, index) => {
        return (
          <Category
            index={index}
            category={category}
            filterItems={filterItems}
          />
        );
      })}
    </div>
  );
}

export default List;
