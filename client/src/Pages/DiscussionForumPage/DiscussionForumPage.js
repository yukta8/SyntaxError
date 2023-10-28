import React, { useState, useEffect } from "react";
import api from "../../api/api";
import Dashboard from "../../Components/DiscussionForum/Dashboard";

import styled from "styled-components";

export const DiscussionForumPage = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [isError, setIsError] = useState("");

  const getAPIData = async () => {
    try {
      const res = await api.get("/blog");
      // console.log(res.data);
      setReviewsData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);
  console.log(reviewsData);
  return (
    <>
      {isError !== "" ? (
        <Error>{isError}</Error>
      ) : (
        <Dashboard reviewsdata={reviewsData} />
      )}
    </>
  );
};

const Error = styled.div`
  text-align: center;
  font-size: 2rem;
`;
