const express = require("express");
const router = express.Router();
const util = require("../lib/util");
const statusCode = require("../constant/statusCode");
const responseMessage = require("../constant/responseMessage");

const users = require("../dbmockup/users");

//    /user/signup
router.post("/signup", (req, res) => {
  // const name = req.body.name;
  // const password = req.body.password;
  // const email = req.body.email;

  // Destructing assignment: 비구조화 할당
  const { name, password, email } = req.body;

  // Error Handling
  if (!name || !password || !email) {
    return res
      .status(400)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const alreadyUser = users.filter((o) => o.email === email).length > 0;
  if (alreadyUser) {
    return res
      .status(409)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
  }

  const newUser = {
    id: users.length + 1,
    name,
    password,
    email,
  };

  res.status(200).send(newUser);
});

module.exports = router;
