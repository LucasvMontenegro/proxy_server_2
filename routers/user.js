var express = require("express");
const { check, validationResult } = require("express-validator");
var router = express.Router();
const userValidator = [check("name").isString(), check("email").isEmail()];

router
  .route("/")
  .get((req, res, next) => {
    console.log("/ Get");
    res.status(200).send("/ GET");
    next();
  })
  .post(userValidator, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const name = req.body.name;
    const email = req.body.email;
    console.log(name);
    console.log(email);
    console.log("/ Post");
    res.status(200).send(`/ POST ${name}, ${email} `);
    next();
  });

module.exports = router;
