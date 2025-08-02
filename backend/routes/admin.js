const express = require("express");
const controller = require("../controller/user");
const router = express.Router();
router.post("/admin/assignRider", controller.assignRider);

module.exports = router;
