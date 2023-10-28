const express = require("express");
const { ytController, articleController, researchController } = require("../controllers/apiController");

const router = express.Router();

router.get("/youtubeLinks/:name", ytController);
router.get("/articleLink/:name", articleController);
router.get("/researchLinks/:name", researchController);

module.exports = router;