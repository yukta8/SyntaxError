  import React, { useEffect, useState } from "react";
  import Navbar from "../../Components/Navbar/Navbar";
  import PageHeading from "../../Components/PageHeading/PageHeading";
  import axios from "axios";
  import { useParams,useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import video from "../../Assets/aboutus.png";

  import "./youtube.css";
  import YoutubeCard from "../../Components/Youtube/YoutubeCard";

const Youtube = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [videos, setVideos] = useState([]);
  const [par, setPar] = useState("");
  useEffect(() => {
    if (params?.q) {
      setPar(params.q);
    }
  }, [params?.q]);
  useEffect(() => {
    if (par) {
      getYoutubedata();
    }
  }, [par]);

  const getYoutubedata = async () => {
    try {
      const { data } = await axios.get(`/api/youtubeLinks/${par}`);
      setVideos(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="page">
        <Navbar />
        <div className="heading-section">
          <PageHeading title="Youtube videos" subTitle="top videos for you" />
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(`/article/${par}`);
            }}
          >
            Articles
            <BsFillArrowRightCircleFill />
          </button>
        </div>
        <div className="card-grid">
          {videos.map((video, id) => {
            return <YoutubeCard key={id} data={video} />;
          })}
        </div>
      </div>
    </>
  );
};

  export default Youtube;
