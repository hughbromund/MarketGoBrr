const express = require("express");
const path = require("path");
const router = express.Router();

const analysisController = require(path.resolve(
    __dirname,
    "../Controllers/AnalysisController"
))

const databaseQueryController = require(path.resolve(
    __dirname,
    "../Controllers/DatabaseQueryController"
))

router.get("/api/:user/:stock", analysisController.getUserAnalysis);
router.get("/api/topRVal", databaseQueryController.getRVal);

module.exports = router;