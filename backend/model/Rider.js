const mongoose = require("mongoose");
const rider = require("../routes/rider");
const ParcelSchema = require("./schemas/shemas").CreateParcel;

const riderschema = require("./schemas/shemas").AssignRider;
const riderModal = mongoose.model("AssignParcel", riderschema);
const ParcelModal = mongoose.model("makeparcels", ParcelSchema);

class Rider {
  static async getRiderinfo(id) {
    const assignedParcels = await riderModal.countDocuments({
      riderId: id,
      status: "Assigned",
    });
    const Delivered = await riderModal.countDocuments({
      riderId: id,
      status: "Delivered",
    });
    const UpdatesNeeded = await riderModal.countDocuments({
      riderId: id,
      status: { $nin: ["Delivered", "Returned"] },
    });
    const info = {
      assignedParcels,
      Delivered,
      UpdatesNeeded,
    };
    return info;
  }
  static async getParcels(id) {
    const assignedParcels = await riderModal.find(
      { riderId: id },
      { _id: 0, parcelId: 1 }
    );

    const parcelIds = assignedParcels.map(
      (p) => new mongoose.Types.ObjectId(p.parcelId)
    );
    const parcels = await ParcelModal.find({ _id: { $in: parcelIds } });
    return parcels;
  }
  static async updateStatus(riderId, parcelId, status) {
    const info = {
      success: false,
      message: "",
    };
    let checkReturned = await ParcelModal.findOne({
      _id: parcelId,
      status: "Returned",
    });
    if (checkReturned) {
      info.message = "Parcel already Returned";
      return info;
    }
    let checkDelievered = await ParcelModal.findOne({
      _id: parcelId,
      status: "Delivered",
    });
    if (checkDelievered) {
      info.message = "Parcel already delievered";
      return info;
    }
    let parcel = await ParcelModal.findOne({ _id: parcelId, status: status });
    if (parcel) {
    }

    let update;
    const now = new Date();

    switch (status) {
      case "Intransit":
        update = await ParcelModal.updateOne(
          { _id: parcelId },
          {
            $set: {
              status: status,
              inTransitDate: now,
            },
          }
        );
        break;
      case "Delivered":
        update = await ParcelModal.updateOne(
          { _id: parcelId },
          {
            $set: {
              status: status,
              DeliveredDate: now,
            },
          }
        );
        break;
      case "Returned":
        update = await ParcelModal.updateOne(
          { _id: parcelId },
          {
            $set: {
              status: status,
              ReturnedDate: now,
            },
          }
        );
        break;
    }

    await riderModal.updateOne(
      { parcelId: parcelId, riderId: riderId },
      { $set: { status: status } }
    );
    info.success = true;
    info.msg = "Status updated succesfully";
    return info;
  }
}
module.exports = Rider;
