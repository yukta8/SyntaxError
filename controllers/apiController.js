const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const ytController = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const searchQuery = req.params.name;
  const maxResults = 3;
  const videoDuration = "medium";
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&order=relevance&q=${searchQuery}&type=video&videoDuration=${videoDuration}&key=${apiKey}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const videos = response.data.items;
      const videoData = videos.map((video, index) => {
        const videoId = video.id.videoId;
        const videoTitle = video.snippet.title;
        const videoURL = `https://www.youtube.com/watch?v=${videoId}`;
        return {
          title: videoTitle,
          link: videoURL,
        };
      });
      res.json(videoData); // Send the video data as a JSON response
    })
    .catch((error) => {
      console.error("Error fetching video data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

module.exports = {
  ytController,
};