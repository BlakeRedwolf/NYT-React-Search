var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var application_controller = require("./controllers/application_controller");

var app = express();
var db_connection = require("./db/connection");

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/')));
app.use("/", application_controller);

app.listen(port, function() {
  console.log("Connection Successful");
});