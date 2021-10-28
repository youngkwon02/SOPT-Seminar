const util = require("../../lib/util");
const statusCode = require("../../constant/statusCode");
const responseMessage = require("../../constant/responseMessage");
const posts = require("../../dbmockup/posts");

module.exports = async (req, res) => {
  const { content, writer } = req.body;
  if (!content || !writer) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }
  const newPost = {
    id: posts.length + 1,
    content,
    writer,
  };
  res
    .status(statusCode.OK)
    .send(
      util.success(statusCode.OK, responseMessage.CREATE_POST_SUCCESS, newPost)
    );
};
