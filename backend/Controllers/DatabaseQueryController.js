const path = require("path");

var DatabaseQueryService = require(path.resolve(
    __dirname,
    "../Services/DatabaseQueryService.js"
))

exports.getRVal = async function (req, res, next) {
    let status = 200;
    let result = await DatabaseQueryService.topRVal(req, res);
}