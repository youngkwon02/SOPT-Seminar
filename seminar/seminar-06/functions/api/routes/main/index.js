const express = require("express");
const router = express.Router();

router.get("/recommend-channel", require("./mainRecChanGET"));
router.get("/popular-live", require("./mainPopLiveGET"));

module.exports = router;
