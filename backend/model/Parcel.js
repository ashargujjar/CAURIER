const mongoose = require("mongoose");
const ParcelSchema = require("./schemas/shemas").CreateParcel;
const AssignmentSchema = require("./schemas/shemas").AssignRider;

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
      return await Assign.create({
        parcelId: parcelId,
        riderId: riderId,
      });
    } else {
      return parcel;
    }
  }
}
module.exports = Parcel;
