const express = require('express');
const router = express.Router();

router.get("/login", (req, res) => {
  const result = {
    status: 200,
    message: "로그인하세요~",
  };
  res.status(200).send(result);
});

router.get("/signup", (req, res) => {
  const result = {
    status: 200,
    message: "회원가입하세요~",
  };
  res.status(200).send(result);
});

module.exports = router;