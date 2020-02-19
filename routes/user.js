var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
  console.log("GET /");
  res.send("GET / ");
  next()
});

router.get("/teste", function(req, res, next) {
    console.log("GET /teste");
    res.send("GET /teste ");
    next()
  });

module.exports = router;
