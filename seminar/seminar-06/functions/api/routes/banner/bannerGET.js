const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const util = require("../../../lib/util");
const banners = require("../../../dbMockup/banner");

module.exports = async (req, res) => {
  const bannerList = banners;

  if (!bannerList) {
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
  res
    .status(statusCode.OK)
    .send(
      util.success(
        statusCode.OK,
        responseMessage.SUCCESS_GET_BANNER,
        bannerList
      )
    );
};
