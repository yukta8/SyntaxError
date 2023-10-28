import React from "react";

const Category = ({ category, filterItems, index }) => {
  return (
    <button
      type="button"
      className="filter-btn"
      key={index}
      onClick={() => filterItems(category)}
    >
      {category}
    </button>
  );
};
export default Category;
