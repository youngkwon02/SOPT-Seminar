const express = require("express");
const router = express.Router();

router.use("/banner", require("./banner"));
router.use("/main", require("./main"));

module.exports = router;
