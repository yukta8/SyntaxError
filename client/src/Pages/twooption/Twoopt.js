import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";
import Optioncard from "../../Components/Optioncard/Optioncard";
import { useParams} from "react-router-dom";

// import { FiSearch } from "react-icons/fi";
// import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";
import "./twoopt.css";

const Twoopt = () => {
  const params = useParams();
  const [par, setPar] = useState("");
  useEffect(() => {
    if (params?.q) {
      setPar(params.q);
    }
  }, [params?.q]);

  const groupData = [
    {
      id: 1,

      name: "On surface level",
      desc: "Opt for surface level learning if you're looking for a swift grasp of the topic. This option provides concise articles and summaries to get you started on your learning journey. It's designed to offer a foundational understanding, making it perfect for those seeking an overview or a quick refresher before diving deeper into the subject matter.",
      notion: "",
      linkedIn: "https://www.linkedin.com/in/rishabh-gupta-35224324b/",
      instagram: "",
      github: "",
      website: "",
      facebook: "",
      link: `/yt/${par}`,
    },
    {
      id: 2,

      name: "Deep Knowldege",
      desc: "Choose deep level learning for a comprehensive understanding. This option offers in-depth research papers and scholarly articles to help you master the subject. It's tailored for individuals who aspire to explore every facet and gain expertise in the field. Immerse yourself in the depths of knowledge, uncovering intricate details and gaining a profound understanding of the subject matter.",
      notion: "",
      linkedIn: "",
      instagram: "",
      github: "",
      website: "",
      facebook: "",
      link: `/research/${par}`,
    },
  ];

  /*return <ChildComponent isMediaQueryMatched={isMediaQueryMatched} />;*/
  return (
    <>
      {/* <GroupCard isMediaQueryMatched={isMediaQueryMatched} /> */}
      <div className="page">
        <Navbar />
        <div className="heading-section">
          <PageHeading
            title="What do you want to learn"
            subTitle="choose between two"
          />
        </div>
        <div className="card-grid">
          {groupData.map((group, id) => {
            return <Optioncard key={id} data={group} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Twoopt;
