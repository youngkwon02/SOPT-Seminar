const express = require("express");
const router = express.Router();

router.post("/message", require("./bannerMessagePOST"));
router.get("/", require("./bannerGET"));

module.exports = router;
