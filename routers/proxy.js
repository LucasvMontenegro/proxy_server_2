const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const proxyValidator = [check("name").isString()];

const errorValidator = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
};

router
  .route("/")
  .get((req, res, next) => {
    console.log("/ Get");
    const name = req.body.name;
    console.log(name)
    res.status(200).send(`/ GET chegou no legado ${name}`);
    next();
  })
  .post(proxyValidator, (req, res, next) => {
    console.log("/ POST");
    const name = req.body.name;
    console.log(name)
    console.log(res.body)
    res.status(200).send(`/ POST chegou no legado ${name}`);
    next();
  });

module.exports = router;
