const express = require("express");
const riderController = require("../controller/rider");
const auth = require("../auth/auth").authorization;
const rider = express.Router();

rider.get("/dashboard", auth, riderController.getRiderDashboard);
rider.get("/parcels", auth, riderController.getParcels);
rider.put("/updateStatus/:id", auth, riderController.updateStatus);

module.exports = rider;
