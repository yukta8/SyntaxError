const axios = require("axios");
const { getJson } = require("serpapi");
const dotenv = require("dotenv");
dotenv.config();
const natural = require("natural");
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

const ytController = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const searchQuery = req.params.name;
  const maxResults = 6;
  const videoDuration = "medium";
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&order=relevance&q=${searchQuery}&type=video&videoDuration=${videoDuration}&key=${apiKey}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const videos = response.data.items;
      const videoData = videos.map((video, index) => {
        const videoId = video.id.videoId;
        const videoTitle = video.snippet.title;
        const videoDesc = video.snippet.description;
        const videoPng = video.snippet.thumbnails.high.url;
        const videoURL = `https://www.youtube.com/watch?v=${videoId}`;
        return {
          title: videoTitle,
          photo: videoPng,
          description: videoDesc,
          link: videoURL,
        };
      });
      res.json(videoData);
    })
    .catch((error) => {
      console.error("Error fetching video data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

const articleController = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const searchEngineId = process.env.Searchengine_id;
  const searchQuery = req.params.name + " article";
  const maxResults = 10;

  const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&key=${apiKey}&cx=${searchEngineId}&num=${maxResults}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const articles = response.data.items;
      if (articles) {
        const articleData = [];
        articles.forEach((article, index) => {
          const articleTitle = article.title;
          tfidf.addDocument(articleTitle);
          const queryTokens = searchQuery.toLowerCase().split(" ");
          const relevanceScore = tfidf.tfidfs(
            queryTokens,
            (i, measure) => measure
          );
          const articleLink = article.link;
          const articleDes = article.pagemap.metatags;
          const articleNew = {
            title: articleTitle,
            description:
              articleDes[0]["og:description"] ||
              articleDes[0]["twitter:description"],
            link: articleLink,
            website: articleDes[0]["og:site_name"],
            relevance: relevanceScore[0],
          };
          articleData.push(articleNew);
        });
        articleData.sort((a, b) => b.relevance - a.relevance);
        const top6Articles = articleData;
        res.json(top6Articles);
      } else {
        console.error("Error fetching article data:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

const researchController = async (req, res) => {
  const engine = "google_scholar";
  const api_key = process.env.SERP_API_KEY;
  const searchQuery = req.params.name;
  try {
    getJson(
      {
        engine: engine,
        q: searchQuery,
        api_key: api_key,
      },
      (json) => {
        const researches = json.organic_results;
        if (researches) {
          const researchData = [];
          researches.forEach((research, index) => {
            const researchTitle = research.title;
            tfidf.addDocument(researchTitle );
            const queryTokens = searchQuery.toLowerCase().split(" ");
            const relevanceScore = tfidf.tfidfs(
              queryTokens,
              (i, measure) => measure
            );
            const researchLink = research.link;
            const researchDes = research.snippet;
            const researchPub = research.publication_info["summary"]
            const researchNew = {
              title: researchTitle,
              link: researchLink,
              description:researchDes,
              publication:researchPub,
              relevance: relevanceScore[0]
            };
            researchData.push(researchNew);
          });
          researchData.sort((a, b) => b.relevance - a.relevance);
          const top6Articles = researchData.slice(0, 6);
          res.json(top6Articles);
        }
      }
    );
  } catch (error) {}
};

module.exports = {
  ytController,
  articleController,
  researchController,
};
