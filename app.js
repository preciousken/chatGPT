var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var app = express();
require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");
var cors = require('cors')
var server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(function(err, req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://www.sandbox.paypal.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(err);
    });

    // configuring the OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);
    //import routes file
var chatRoute = require('./routes/chatGPT');

app.use("/api",chatRoute);

server.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});