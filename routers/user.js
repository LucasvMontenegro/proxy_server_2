var express = require("express");
var router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    console.log("/ Get");
    res.send("GET / ")
    next();
  })
  .post((req, res, next) => {
    console.log("/ Post");
    res.send("POST / ")
    next();
  });

module.exports = router;
