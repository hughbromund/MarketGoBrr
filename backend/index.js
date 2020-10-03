const express = require("express");
var cors = require("cors");
const app = express();

const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(require("./Routers/router"));

app.listen(port,  () => console.log(`MarketGoBrr listening on port ${port}!`))

