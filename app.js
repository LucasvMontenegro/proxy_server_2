const express = require("express");
const app = express();
const userRoutes = require("./routers/user");

const autentication = function(req, res, next) {
  console.log("1 autentication");
  next();
};

app.use(autentication);
app.use("/user", userRoutes);

const port = 3333;
app.listen(port, function() {
  console.log(`app listening on port ${port}!`);
});
