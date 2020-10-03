const express = require("express");
var cors = require("cors");
const app = express();
const path = require("path");

const port = process.env.PORT || 5000;

if (process.env.REACT_APP_RUNTIME !== "production") {
  app.use(cors());
} else {
  var whitelist = [
    "https://marketgobrr.com/",
    "https://marketgobrr.com",
    "https://www.marketgobrr.com/",
    "https://www.marketgobrr.com",
  ];

  app.use(
    cors({
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    })
  );
}

app.use(express.json());
app.use(require(path.resolve(__dirname, "./Routers/router")));

app.listen(port, () => console.log(`MarketGoBrr listening on port ${port}!`));
