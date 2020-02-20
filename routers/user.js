var express = require("express");
var router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    console.log("/ Get");
    res.status(200).send('/ GET')
    next();
  })
  .post((req, res, next) => {
    console.log("/ Post");
    res.status(200).send('/ POST')
    next();
  });

module.exports = router;
