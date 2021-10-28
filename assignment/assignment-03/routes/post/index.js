const express = require("express");
const router = express.Router();

router.get("", require("./postAllGET"));
router.get("/:id", require("./postGetByIdGET"));
router.post("", require("./postNewPOST"));
router.put("/:id", require("./postUpdateByIdPUT"));
router.delete("/:id", require("./postDeleteByIdDELETE"));

module.exports = router;
