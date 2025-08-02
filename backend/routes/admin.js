const express = require("express");
const controller = require("../controller/user");
const adminController = require("../controller/admin");
const router = express.Router();
router.get("/admin/view", controller.adminView);
router.post("/admin/assignRider", adminController.assignRider);

module.exports = router;
