const express = require("express");
const { ytController, wikiController, articleController } = require("../controllers/apiController");

const router = express.Router();

router.get("/youtubeLinks/:name", ytController);
router.get("/articleLink/:name", articleController);

module.exports = router;