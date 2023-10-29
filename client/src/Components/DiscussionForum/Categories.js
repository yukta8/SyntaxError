import React, { useState } from "react";

const Category = ({
  category,
  filterItems,
  index,
}) => {
  return (
    <button
      type="button"
      value={category}
      key={index}
      onClick={() => {
        filterItems(category);
        
      }}
      className={`filter-btn `}
    >
      {category}
    </button>
  );
};
export default Category;
