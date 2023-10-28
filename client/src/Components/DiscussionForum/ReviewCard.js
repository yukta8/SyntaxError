import React, { useState } from "react";
import { ReviewModal } from "./Modal/ReviewModal";
import { Button } from "@mui/material";
const ReviewCard = ({ review }) => {
  const [LiveEventModalOpen, setLiveEventModal] = useState(false);

  const openModal = () => {
    setLiveEventModal(true);
  };
  const closeModal = () => {
    setLiveEventModal(false);
  };
  
    const {id,author,content,title}=review
        return (
          <article key={id} className="review-card">
            <div className="profile">{author.slice(0, 1)}</div>
            <div className="review-msg-box">
              <header>
                <h4>{author} </h4>
              </header>
              <div className="message">
                {content.slice(0, 50)} {content.length <= 50 ? "" : `...`}
                {content.length <= 50 ? (
                  ""
                ) : (
                  <button className="read-more" Active={"active"} onClick={openModal}>
                    Read more
                  </button>
                )}
              </div>
              <ReviewModal
                open={LiveEventModalOpen}
                close={closeModal}
                key={review.id}
                review={review}
              />
            </div>
          </article>
        
   
  );
};

export default ReviewCard;
