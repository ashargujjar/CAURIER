const mongoose = require("mongoose");

exports.UserCreate = new mongoose.Schema({
  role: String,
  name: String,
  phone: String,
  email: String,
  password: String,
  joiningDate: {
    type: Date,
    default: Date.now,
  },
});
exports.CreateParcel = new mongoose.Schema({
  userId: String,
  recieverName: String,
  pickupAddress: String,
  deliveryAddress: String,
  phone: String,
  parcelDescription: String,
  parcelWeight: String,
  status: {
    type: String,
    default: "Pending",
  },
  rider: {
    type: String,
    default: "not assigned",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  eta: String,
  riderAssignedDate: Date,
  inTransitDate: Date,
  DeliveredDate: Date,
  assignedRider: {
    name: String,
    phone: String,
  },
  ReturnedDate: Date,
});

exports.AssignRider = new mongoose.Schema({
  parcelId: String,
  riderId: String,
  status: {
    type: String,
    default: "Assigned",
  },
  riderAssignedDate: {
    type: Date,
    default: Date.now,
  },
});
