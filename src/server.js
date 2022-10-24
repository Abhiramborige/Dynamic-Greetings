require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");
var cors = require('cors')
var bodyParser = require('body-parser');
const serverless = require("serverless-http");


const app = express();
const router = express.Router();
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

mongoose.connect(process.env.CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
router.get("/", async (req, res) => {
  res.send("working");
});

router.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  const shortUrl = await ShortUrl.findOne({ full: req.body.fullUrl });
  res.status(200).json({url:shortUrl.short})
});

router.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();
  res.redirect(shortUrl.full);
});


app.use(`/.netlify/functions/server`, router);
// app.listen(process.env.PORT || 3000);

module.exports = app;
module.exports.handler = serverless(app);
