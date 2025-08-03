const User = require("../model/User");
const Parcel = require("../model/Parcel");
const jwt = require("jsonwebtoken");
// secret
const secret = process.env.SECRET;
exports.login = async (req, res) => {
  const { role, email, password } = req.body;
  const resp = await User.checkUsernamePassword(role, email, password);
  if (resp.success) {
    const token = jwt.sign({ user: resp.user }, secret);
    return res.status(201).json({ token: token });
  } else {
    return res.status(302).json({ msg: "error accoured " });
  }
};
exports.signup = async (req, res) => {
  const { name, phone, email, password, role } = req.body;
  const user = new User(name, phone, email, password, role);
  const resp = await user.save();
  if (resp) {
    return res.status(201).json(resp);
  } else {
    return res.status(302).json({ msg: "error accoured " });
  }
};
exports.createParcel = async (req, res) => {
  const userId = req.user.user._id.toString();
  const {
    recieverName,
    pickupAddress,
    deliveryAddress,
    phone,
    parcelDescription,
    parcelWeight,
  } = req.body;
  console.log(req.body);
  const parsel = new Parcel(
    userId,
    recieverName,
    pickupAddress,
    deliveryAddress,
    phone,
    parcelDescription,
    parcelWeight
  );
  const saved = await parsel.save();
  return res.status(201).json(saved);
};
exports.getParcels = async (req, res) => {
  // user id from req later after jsom
  const userId = req.user.user._id.toString();
  const parcels = await Parcel.getParcels(userId);
  if (parcels) {
    return res.status(201).json(parcels);
  } else {
    return res.status(404).json({ msg: "no parcels yet" });
  }
};

exports.getParcelDetails = async (req, res) => {
  const parcelId = req.params.parcelId;
  const parcel = await Parcel.getParcelDetails(parcelId.toString());
  return res.status(201).json(parcel);
};
exports.assignRider = async (req, res) => {
  console.log(req.body);
  const { parcelId, riderId } = req.body;
  const rider = await Parcel.assignRider(parcelId, riderId);
  if (rider.success) {
    return res.status(201).json(rider);
  } else {
    res.status(301).json("rider already assingned");
  }
};
exports.getRiderInfo = async (req, res) => {};
