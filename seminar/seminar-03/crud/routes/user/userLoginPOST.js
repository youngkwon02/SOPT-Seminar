module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }
  const emailMatched = users.filter((o) => o.email === email);
  if (emailMatched.length === 0) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }
  const passwordMatched = emailMatched.filter((o) => o.password === password);
  if (passwordMatched.length === 0) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
  }
  res
    .status(statusCode.OK)
    .send(
      success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
        id: passwordMatched.id,
        email: passwordMatched.email,
        name: passwordMatched.name,
      })
    );
};
