const path = require("path");

var UserAnalysisService = require(path.resolve(
    __dirname,
    "../Services/UserAnalysisService.js"
))

exports.getUserAnalysis = async function (req, res, next) {
    let result = await UserAnalysisService.userAnalysis(req);
    res.status(result.status).json(result);
}