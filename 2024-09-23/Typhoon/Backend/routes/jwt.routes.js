const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const secretKey = "shhhh";

router.get("/:name", (req, res) => {
  const name = req.params.name;
  const token = jwt.sign({ name: name }, secretKey, { expiresIn: "1h" });
  res.send(token);
});

const postMiddleware = (req, res, next) => {
  console.log("the response will be sent by the next function ... ");
  next();
};

router.post("/", postMiddleware, (req, res) => {
  const { token } = req.body;

  jwt.verify(token, secretKey, function (err, decoded) {
    if (err) return res.send({ valid: false, message: "Invalid token" });
    console.log(decoded);
    res.send(true);
  });
});

module.exports = router;
