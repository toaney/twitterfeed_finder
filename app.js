const express = require("express");
const app = express();
var Twitter = require("twitter");
var config = require("./config.js");
var T = new Twitter(config);

const port = process.env.PORT_NUMBER || 80;

// Set up your search parameters
const getTweets = async (req, res) => {
    let searchParams = {
      q: req.query.q,
      count: 30,
      result_type: "recent",
      lang: "en"
    };
    T.get("search/tweets", searchParams, function(err, data, response) {
      res.send(data);
    });
};

const getUserTweets = async (req, res) => {
  var params = { screen_name: req.query.screen_name };
  T.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets[0]);
      //console.log(tweets.slice(0, 5));
      res.send(tweets.slice(0, 30));
    }
  });
};

var stream = T.stream("statuses/filter", { track: "dog" });
const browse = async (req, res) => {
  stream.on("data", function(event) {
      console.log(event.text);
      // res.write(event.text);
      res.write(event.text);
  });
  stream.on("error", function(error) {
    throw error;
  });
};

// You can also get the stream in a callback if you prefer.
// const browse = async (req, res) => {
//   T.stream("statuses/filter", { track: "dog" }, function(stream) {
//     stream.on("data", function(event) {
//       console.log(event && event.text);
//       res.write(event && event.text);
//     });

//     stream.on("error", function(error) {
//       throw error;
//     });
//   });
// };

app.get("/tweets", getTweets);
app.get("/usertweets", getUserTweets);
app.get("/stream", browse);
// app.get("/", (req, res) => res.send("Hello twitterapi!"));

app.listen(port, () => console.log(`app listening on port ${port}!`));