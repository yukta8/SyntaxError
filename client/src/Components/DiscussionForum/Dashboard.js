import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";

import ReviewCard from "./ReviewCard";
import Category from "./Categories";
import Data from "./Data";
import "./dashboard.css";
import { SearchBar } from "./SearchBar/SearchBar";

// const allCategories = new Set(items.map((item)=> item.category))
// const allCategories = ["all", ...new Set(Data.map((item) => item.Category))];
// console.log(allCategories);

function Dashboard({ reviewsdata }) {
  const [reviews, setReviews] = useState(reviewsdata);
  // const [categories, setCategories] = useState(allCategories);
  const [reviewText, setReviewText] = useState("");

  const handleReviewSubmit = async () => {
    try {
      // Send a POST request to your backend API
      const response = await axios.post("/api/community/blog", { text: reviewText });

      // Handle the response (e.g., show a success message)
      console.log("Review submitted successfully");

      // Clear the input field or reset the state
      setReviewText("");
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error submitting review:", error);
    }
  };

  // console.log(reviewsdata);
  // console.log(reviews);
  const filterItems = (title) => {
    if (title === "all") {
      setReviews(reviewsdata);
      return;
    }
    let newReviews = reviewsdata.filter((item) => item.title === title);
    setReviews(newReviews);
  };
  return (
    <section className="dashboard-section">
      <div className="section">
        <SearchBar filterItems={filterItems} reviewsdata={reviewsdata} />

        {/* <div className="btn-container"> */}
        {/* <List filterItems={filterItems}/> */}
        {/* {categories.map((category, index) => {
        return (
        <Category category={category} filterItems={filterItems} index={index}/>
        )})} */}
        {/* </div> */}
        <div className="reviews-section">
          {reviews.map((review) => {
            return <ReviewCard key={review.id} review={review} />;
          })}
        </div>
        <form className="type-box-form">
          <div className="type-box-div">
            <input
              type="text"
              className="type-topic"
              placeholder="Enter name of the topic"
              required
            />

            <input
              type="text"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="type-review"
              placeholder="Type something..."
              required
            />
          </div>
          <button type="submit" id="Submit" class="send" onClick={handleReviewSubmit}>
            <AiOutlineSend color="black" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Dashboard;
