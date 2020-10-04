const got = require("got")
const path = require("path");
const config = require(path.resolve(__dirname, "../config.json"));
const sql = require(path.resolve(__dirname, "../Database/Database.js"));


exports.userAnalysisStub = async function (req) {
    return {
        stock: {"o": [120.11], "t": [1584602520]},
        tweet: [{text: "hello wazzup", id: "1242342343242", date: "2020-03-19T07:22Z"}],
        score: [{score: 7.64, time: 1584602520}],
        status: 200
    }

}


exports.userAnalysis = async function (req) {
    const result = await got.post('https://' + config.project_region + '-' + config.project_id + '.cloudfunctions.net/' + config.project_function,
    {
        json: {
            user: req.params.user,
            stock: req.params.stock
        },
        responseType: 'json',
        resolveBodyOnly: true
    })
    console.log(result.r_value)
    if (!result.status) {
        result.status = 200
    }

    if (result.status == 400) {
        return result
    }
    

    sql.query("INSERT IGNORE INTO top_pairs (twit_acc, stock_symbol, r_val) VALUES (\"" + req.params.user + "\", \""+ req.params.stock + "\", " + result.r_value + ")", (err, result) => {
        if (err) throw err;
        console.log("1 Row inserted");
    });

    return result;
    
}