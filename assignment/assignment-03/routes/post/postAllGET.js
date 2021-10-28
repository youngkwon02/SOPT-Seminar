const util = require("../../lib/util");
const statusCode = require("../../constant/statusCode");
const responseMessage = require("../../constant/responseMessage");
const posts = require("../../dbmockup/posts");

module.exports = async (req, res) => {
  res
    .status(200)
    .send(
      util.success(
        statusCode.UPDATE_POST_SUCCESS,
        responseMessage.UPDATE_POST_SUCCESS,
        posts
      )
    );
};
