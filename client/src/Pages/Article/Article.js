import React,{useState,useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import poc from "../../Assets/aboutus.png";
// import Footer from "../../Components/Footer/Footer";
import ArticleCard from "../../Components/Article/ArticleCard";
import './article.css';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Article = () => {
  const navigate = useNavigate();
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
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate(`/yt/${par}`);
              }}
            >
              Videos
              <BsFillArrowRightCircleFill />
            </button>
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
