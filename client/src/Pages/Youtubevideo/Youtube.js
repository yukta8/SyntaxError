  import React, { useEffect, useState } from "react";
  import Navbar from "../../Components/Navbar/Navbar";
  import PageHeading from "../../Components/PageHeading/PageHeading";
  import axios from "axios";
  import { useParams } from "react-router-dom";

  import "./youtube.css";
  import YoutubeCard from "../../Components/Youtube/YoutubeCard";

  const Youtube = () => {
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
      getYtdata();
    }
  }, [par]);

  const getYtdata = async () => {
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
          </div>
          <div className="card-grid">
            {console.log(videos)}
            {videos?.map((video, id) => {
              return <YoutubeCard key={id} data={video} />;
            })}
          </div>
        </div>
      </>
    );
  };

  export default Youtube;
