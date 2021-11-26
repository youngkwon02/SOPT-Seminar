const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const util = require("../../../lib/util");
const messages = require("../../../dbMockup/message");

module.exports = async (req, res) => {
  const { userName, message } = req.body;

  if (!userName || !message) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const newMessage = {
    id: messages.length + 1,
    userName,
    message,
  };

  res
    .status(statusCode.OK)
    .send(
      util.success(
        statusCode.OK,
        responseMessage.SUCCESS_CREATED_MESSAGE,
        newMessage
      )
    );
};
