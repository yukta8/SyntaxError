const express = require("express");
const { ytController } = require("../controllers/apiController");

const router = express.Router();

router.get("/youtubeLinks/:name", ytController);

module.exports = router;