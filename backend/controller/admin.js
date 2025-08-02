const Parcel = require("../model/Parcel");
const User = require("../model/User");
exports.adminView = async (req, res) => {
  const info = await Parcel.getCountforAdmin();
  if (info) {
    return res.status(201).json(info);
  }
};
exports.getAllParcels = async (req, res) => {
  const parcels = await Parcel.getAllParcels();
  return res.status(201).json(parcels);
};
exports.getRiders = async (req, res) => {
  const riders = await User.getRiders();
  return res.status(201).json(riders);
};
