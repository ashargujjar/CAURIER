const Rider = require("../model/Rider");
const rider = require("../routes/rider");
exports.getRiderDashboard = async (req, res) => {
  const info = await Rider.getRiderinfo(req.user.user._id.toString());

  return res.status(201).json(info);
};
exports.getParcels = async (req, res) => {
  const parcels = await Rider.getParcels(req.user.user._id.toString());
  return res.status(201).json(parcels);
};
exports.updateStatus = async (req, res) => {
  const parcelId = req.params.id;
  const riderId = req.user.user._id.toString();
  const { status } = req.body;
  const info = await Rider.updateStatus(riderId, parcelId, status);
  if (info.success) {
    return res.status(201).json(info);
  } else {
    return res.status(301).json(info);
  }
};
