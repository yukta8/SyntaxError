import React,{useEffect,useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";

import poc from "../../Assets/aboutus.png";
import Footer from "../../Components/Footer/Footer";
import ArticleCard from "../../Components/Article/ArticleCard";
import './Research.css';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const Research = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [research, setResearch] = useState([]);
  const [par, setPar] = useState("");
  useEffect(() => {
    if (params?.q) {
      setPar(params.q);
    }
  }, [params?.q]);
  useEffect(() => {
    if (par) {
      getResearchdata();
    }
  }, [par]);

  const getResearchdata = async () => {
    try {
      const { data } = await axios.get(`/api/researchLinks/${par}`);
      setResearch(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(research)
  const filter = [
    {
      id: 1,
      name: "Today",
    },
    {
      id: 2,
      name: "Tomorrow",
    },
    {
      id: 3,
      name: "Upcoming Week",
    },
    {
      id: 4,
      name: "This Month",
    },
  ];
  return (
    <>
      <div className="page">
        <Navbar />
        <div className="heading-section">
          <PageHeading title="Research" subTitle="Top research papers for you" />
          <div className="filter">
            {filter.map((item) => {
              return (
                <span
                  key={item.id}
                  className={
                    item.id === filter.length
                      ? "filter-item-right filter-item"
                      : item.id === 1
                      ? "filter-item-left filter-item"
                      : "filter-item"
                  }
                >
                  {item.name}
                </span>
                 
              ); 
            })}
          </div>
         
        </div>
        <div className="card-grid">
          {research.map((event, id) => {
            return <ArticleCard key={id} data={event} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Research;
