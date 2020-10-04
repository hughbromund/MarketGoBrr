const path = require("path");
const sql = require(path.resolve(__dirname, "../Database/Database.js"));


exports.topRVal = async function (req, res) {
    
    sql.query("SELECT * FROM top_pairs ORDER BY ABS(r_val) DESC LIMIT 20;", (err, result) => {
        if (err) throw err;
        console.log(result)
       res.json(result)
    }) 

}