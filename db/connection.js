var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/nytreact", function(err) {
  
  if(err) throw err;
  console.log("db connection successful");
});

//:27017/nytreact
// mongoose.connect("mongodb://heroku_", function(err) {
//   if(err) throw err;
//   console.log("db connection successful");
// });