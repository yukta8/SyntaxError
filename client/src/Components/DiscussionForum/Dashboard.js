import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import api from "../../api/api";
import Swal from "sweetalert2";
import ReviewCard from "./ReviewCard";
import "./dashboard.css";
import { SearchBar } from "./SearchBar/SearchBar";
  import Cookies from "js-cookie"; 

// const allCategories = new Set(items.map((item)=> item.category))
// const allCategories = ["all", ...new Set(Data.map((item) => item.Category))];
// console.log(allCategories);

function Dashboard({ reviewsdata }) {
  const [reviews, setReviews] = useState(reviewsdata);
  // const [categories, setCategories] = useState(allCategories);
  const [reviewText, setReviewText] = useState("");
  const [heading,setHeading] = useState("")
  const token = Cookies.get("authToken"); 

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try { 
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };  
      const response = await api.post("/create-blog", { title: heading,content:reviewText},config);   

      console.log("Review submitted successfully");
      

      setReviewText("");
    } catch (error) {
      
      console.error("Error submitting review:", error);
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You need to sign up/Log in to be able to contribute to discussion forum",
          timer: 3000,
          timerProgressBar: true,
        });
      }
    }
  };

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
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
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
          <button type="submit" id="Submit" className="send" onClick={handleReviewSubmit}>
            <AiOutlineSend color="black" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Dashboard;
