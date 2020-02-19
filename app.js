const express = require("express");
const app = express();
const userRoutes = require("./routes/user");

// var wiki = require('./router.js');

const autentication = function(req, res, next) {
  console.log("1 autentication");
  next();
};

app.use("/user", userRoutes);

app.use(autentication);

app.listen(3333, function() {
  console.log("app listening on port 3333!");
});
