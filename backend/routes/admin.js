const express = require("express");
const controller = require("../controller/user");
const adminController = require("../controller/admin");
const router = express.Router();
router.get("/admin/view", adminController.adminView);
router.get("/admin/allParcels", adminController.getAllParcels);
router.post("/admin/assignRider", controller.assignRider);
router.get("/admin/getRiders", adminController.getRiders);
module.exports = router;
