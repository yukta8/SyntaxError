import React, { useState, useEffect } from "react";
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
  const [heading,setHeading] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const token = Cookies.get("authToken");
  console.log(token);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try { 
    console.log(heading,reviewText);
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };  
      const response = await api.post("/create-blog", { title: heading,content:reviewText},config);

      console.log("Review submitted successfully");

      setReviewText("");
      setHeading("");
      setRefreshKey((prevKey) => prevKey + 1); // Increment the key to trigger a refresh
    } catch (error) {
      // Handle errors (e.g., show an error message)
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

  useEffect(() => {
    if (refreshKey > 0) {
      window.location.reload();
    }
  }, [refreshKey]);

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
          <div className="type-box-div" style={{margin:"0px"}}>
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
          <button type="submit" id="Submit" class="send" style={{margin:"0px",fontSize:"1.5rem",border:"none",boxShadow:"none"}} onClick={handleReviewSubmit}>
            <AiOutlineSend color="black" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Dashboard;
