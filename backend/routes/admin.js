const express = require("express");
const controller = require("../controller/user");
const adminController = require("../controller/admin");
const auth = require("../auth/auth").authorization;

const router = express.Router();
router.get("/admin/view", auth, adminController.adminView);
router.get("/admin/allParcels", auth, adminController.getAllParcels);
router.post("/admin/assignRider", controller.assignRider);
router.get("/admin/getRiders", adminController.getRiders);
module.exports = router;
