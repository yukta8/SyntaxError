import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import ReviewCard from "./ReviewCard";
import Category from "./Categories";
import Data from "./Data";
import "./dashboard.css";

// const allCategories = new Set(items.map((item)=> item.category))
const allCategories = ["all", ...new Set(Data.map((item) => item.Category))];
console.log(allCategories);

function Dashboard() {
  const [reviews, setReviews] = useState(Data);
  const [categories, setCategories] = useState(allCategories);
  const [activeButton, setActiveButton] = useState("all");

  //   const handleButtonClick = (value) => {
  //     setActiveButton(value);
  //   };

  const filterItems = (category) => {
    setActiveButton(category);
    if (category === "all") {
      setReviews(Data);
      return;
    }
    let newReviews = Data.filter((item) => item.Category === category);
    setReviews(newReviews);
  };
  return (
    <section className="dashboard-section">
      <div className="section">
        <div className="discussion-title">
          <h2>Discussion Forum</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
      {categories.map((category, index) => {
        return (
        <Category category={category} filterItems={filterItems} index={index}/>
        )})}
        </div>
        <div className="reviews-section">
          {reviews.map((review) => {
            return <ReviewCard key={review.id} review={review} />;
          })}
        </div>
        <form className="type-box-form">
          <input
            type="text"
            placeholder="Type something...
            "
          />
          <button type="submit" id="Submit" class="send">
            <AiOutlineSend color="black" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Dashboard;
