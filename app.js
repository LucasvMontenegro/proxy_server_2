const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routers/user");
const proxyRoutes = require("./routers/proxy");

const autentication = function(req, res, next) {
  console.log("autentication middleware");
  next();
};

app.use(autentication);
app.use(bodyParser.json());
app.use("/proxy2", proxyRoutes);
app.use("/user", userRoutes);


const port = 6666;
app.listen(port, function() {
  console.log(`app listening on port ${port}!`);
});
