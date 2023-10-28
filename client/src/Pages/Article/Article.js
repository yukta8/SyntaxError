import React,{useState,useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";
import axios from "axios";
import { useParams } from "react-router-dom";
import poc from "../../Assets/aboutus.png";
// import Footer from "../../Components/Footer/Footer";
import ArticleCard from "../../Components/Article/ArticleCard";
import './article.css';

const Article = () => {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  const [par, setPar] = useState("");
  useEffect(() => {
    if (params?.q) {
      setPar(params.q);
    }
  }, [params?.q]);
  useEffect(() => {
    if (par) {
      getArticledata();
    }
  }, [par]);

  const getArticledata = async () => {
    try {
      const { data } = await axios.get(`/api/articleLink/${par}`);
      setArticles(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(articles)

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
  const eventData = [
    {
      id: 1,
      group: "rate",
      title: "Dual Nature",
      date: "15/08/2022",
      desc: "As the sun slowly set over the horizon, a gentle breeze rustled the leaves of the tall trees in the distance, while a small group of birds chirped merrily on a nearby branch. In the distance, a lone wolf howled at the moon as a small stream trickled its way down the rocky terrain, glistening in the fading light",
      pocImg: poc,
      pocName: "website",
      pocContact: "details",
    },
    {
      id: 2,
      group: "rate",
      title: "Dual Nature",
      date: "17/10/2021",
      desc: "As the sun slowly set over the horizon, a gentle breeze rustled the leaves of the tall trees in the distance, while a small group of birds chirped merrily on a nearby branch. In the distance, a lone wolf howled at the moon as a small stream trickled its way down the rocky terrain, glistening in the fading light",
      pocImg: poc,
      pocName: "website",
      pocContact: "details",
    },
    {
      id: 3,
      group: "rate",
      title: "Dual Nature",
      date: "17/10/2021",
      desc: "As the sun slowly set over the horizon, a gentle breeze rustled the leaves of the tall trees in the distance, while a small group of birds chirped merrily on a nearby branch. In the distance, a lone wolf howled at the moon as a small stream trickled its way down the rocky terrain, glistening in the fading light",
      pocImg: poc,
      pocName: "webiste",
      pocContact: "details",
    },
    {
      id: 4,
      group: "rate",
      title: "Dual Nature",
      date: "17/10/2021",
      desc: "As the sun slowly set over the horizon, a gentle breeze rustled the leaves of the tall trees in the distance, while a small group of birds chirped merrily on a nearby branch. In the distance, a lone wolf howled at the moon as a small stream trickled its way down the rocky terrain, glistening in the fading light",
      pocImg: poc,
      pocName: "website",
      pocContact: "details",
    },
  ];
  return (
    <>
      <div className="page">
        <Navbar />
        <div className="heading-section">
          <PageHeading title="Articles" subTitle="Top articles for you" />
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
          {articles.map((event, id) => {
            return <ArticleCard key={id} data={event} />;
          })}
        </div>
      </div>
      
    </>
  );
};

export default Article;
