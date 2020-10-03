const { Console } = require("console");
const path = require("path");

var UserAnalysisService = require(path.resolve(
    __dirname,
    "../Services/UserAnalysisService.js"
))

exports.postUserAnalysis = async function (req, res, next) {
    let status = 400;
    let result = await UserAnalysisService.userAnalysisStub(req);
    console.log(result)
    res.status(result.status).json(result);
}