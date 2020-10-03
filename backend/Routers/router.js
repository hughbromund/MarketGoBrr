const express = require("express");
const path = require("path");
const router = express.Router();

const analysisController = require(path.resolve(
    __dirname,
    "../Controllers/AnalysisController"
))

router.get("/api/:user/:stock", analysisController.getUserAnalysis);

module.exports = router;