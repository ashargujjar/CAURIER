const mongoose = require("mongoose");
const User = require("./User");
const UserSchema = require("./schemas/shemas").UserCreate;

const ParcelSchema = require("./schemas/shemas").CreateParcel;
const AssignmentSchema = require("./schemas/shemas").AssignRider;
const UserModel = mongoose.model("User", UserSchema);

const ParcelModal = mongoose.model("makeparcels", ParcelSchema);
const Assign = mongoose.model("AssignParcel", AssignmentSchema);
class Parcel {
  constructor(
    userId,
    recieverName,
    pickupAddress,
    deliveryAddress,
    phone,
    parcelDescription,
    parcelWeight
  ) {
    this.userId = userId;
    this.recieverName = recieverName;
    this.pickupAddress = pickupAddress;
    this.deliveryAddress = deliveryAddress;
    this.phone = phone;
    this.parcelDescription = parcelDescription;
    this.parcelWeight = parcelWeight;
  }
  async save() {
    return await ParcelModal.create(this);
  }
  static async getParcels(userId) {
    return await ParcelModal.find({ userId: userId.toString() });
  }

  static async getParcelDetails(parcelId) {
    return await ParcelModal.findById(new mongoose.Types.ObjectId(parcelId));
  }
  static async assignRider(parcelId, riderId) {
    const parcel = await Assign.find({
      parcelId: parcelId,
      riderId: riderId,
    });
    if (parcel.length <= 0) {
      const assigned = await Assign.create({
        parcelId: parcelId,
        riderId: riderId,
      });
      const sevenDaysLater = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

      const options = { year: "numeric", month: "long", day: "2-digit" };
      const formatted = sevenDaysLater.toLocaleDateString("en-US", options);

      const [month, day, year] = formatted.replace(",", "").split(" ");
      const customFormatted = `${year}-${month}-${day}`;
      const rider = await UserModel.findOne({ _id: riderId });
      const updateStatus = await ParcelModal.updateOne(
        { _id: parcelId },
        {
          $set: {
            status: "Assigned",
            eta: customFormatted,
            riderAssignedDate: new Date(Date.now()),
            "assignedRider.name": rider.name,
            "assignedRider.phone": rider.phone,
          },
          rider: "Assigned",
        }
      );
      return { success: true };
    } else {
      return { success: false };
    }
  }
  static async getCountforAdmin() {
    const totalParcels = await ParcelModal.countDocuments();
    const pending = await ParcelModal.countDocuments({ status: "Pending" });
    const delivered = await ParcelModal.countDocuments({ status: "Delivered" });
    const assigned = await ParcelModal.countDocuments({ status: "Assigned" });
    const info = {
      totalParcels,
      pending,
      delivered,
      assigned,
    };
    return info;
  }
  static async getAllParcels() {
    const parcels = await ParcelModal.find();
    return parcels;
  }
}
module.exports = Parcel;
