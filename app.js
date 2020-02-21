const express = require("express");
const bodyParser = require("body-parser");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const userRoutes = require("./routers/user");
const googleRoutes = require("./routers/google");

const autentication = function(req, res, next) {
  console.log("1 autentication");
  next();
};

app.use(autentication);
app.use(bodyParser.json());
app.use("/user", userRoutes);


const port = 6666;
app.listen(port, function() {
  console.log(`app listening on port ${port}!`);
});
