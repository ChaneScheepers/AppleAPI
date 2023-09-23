const express = require("express");
const cors = require("cors");
const axios = require("axios");

const bodyParser = require("body-parser");
const PORT = 2000;

// Import routes
const routes = require("./routes/index");

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/api", routes);

app.get(`/search`, (req, res) => {
  const term = req.query.term;
  const media = req.query.media;

  // Collect data from API using params above.
  fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=30`)
    .then((result) => result.json())
    .then((response) => {
      res.send({
        message: "Search was successful",
        response,
      });
    })
    .catch((error) => {
      res.send({
        message: "error" + error,
      });
    });
});

//Listener

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

module.exports = app;
