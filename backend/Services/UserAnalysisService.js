const got = require("got")
const path = require("path");
const config = require(path.resolve(__dirname, "../config.json"));


exports.userAnalysisStub = async function (req) {
    return {
        stock: {"o": [120.11], "t": [1584602520]},
        tweet: [{text: "hello wazzup", id: "1242342343242", date: "2020-03-19T07:22Z"}],
        score: [{score: 7.64, time: 1584602520}],
        status: 200
    }

}


exports.userAnalysis = async function (req) {
    const {result} = await got.post('https://' + config.project-region + '-' + config.project-id + '.cloudfunctions.net/post_analysis',
    {
        json: {
            user: req.params.user,
            stock: req.params.stock
        },
        responseType: 'json'
    })

    return (result, 200)
    
}