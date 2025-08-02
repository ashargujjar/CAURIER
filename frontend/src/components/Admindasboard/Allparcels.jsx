import React, { useState } from "react";
import { AdminNav } from "./adminNav";
import { Link } from "react-router-dom";

const parcelsData = [
  {
    id: "TRK123",
    receiver: "Ali Khan",
    status: "Pending",
    date: "2025-07-25",
    user: "user1@example.com",
    phone: "03001234567",
    pickup: "Karachi",
    delivery: "Lahore",
    weight: "2kg",
    description: "Electronics",
    rider: "Rider A",
    timeline: "Pending",
  },
  // Add more mock parcels
];

export const AllParcels = () => {
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedParcel, setSelectedParcel] = useState(null);

  const filteredParcels = parcelsData.filter((p) => {
    return filterStatus ? p.status === filterStatus : true;
  });

  return (
    <>
      <AdminNav />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">List Of Parcels</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-4">
          <select
            className="border px-4 py-2 rounded"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>

          {/* Add Date and User filters if needed */}
        </div>

        {/* Parcel Table */}
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Tracking ID</th>
              <th className="px-4 py-2 text-left">Receiver</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredParcels.map((parcel) => (
              <tr key={parcel.id} className="border-t">
                <td className="px-4 py-2">{parcel.id}</td>
                <td className="px-4 py-2">{parcel.receiver}</td>
                <td className="px-4 py-2">{parcel.status}</td>
                <td className="px-4 py-2">{parcel.date}</td>
                <td className="px-4 py-2">{parcel.user}</td>
                <td className="px-4 py-2">
                  {parcel.status === "Pending" ? (
                    <div className="flex items-center gap-4">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => setSelectedParcel(parcel)}
                      >
                        View
                      </button>
                      <Link
                        to={`/admin/assign?parcelId=${parcel.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        Assign Rider
                      </Link>
                    </div>
                  ) : (
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => setSelectedParcel(parcel)}
                    >
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Parcel Details */}
        {selectedParcel && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setSelectedParcel(null)}
              >
                ✕
              </button>
              <h3 className="text-xl font-bold mb-4">Parcel Details</h3>
              <div className="space-y-2">
                <p>
                  <strong>Tracking ID:</strong> {selectedParcel.id}
                </p>
                <p>
                  <strong>Receiver:</strong> {selectedParcel.receiver}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedParcel.phone}
                </p>
                <p>
                  <strong>Pickup:</strong> {selectedParcel.pickup}
                </p>
                <p>
                  <strong>Delivery:</strong> {selectedParcel.delivery}
                </p>
                <p>
                  <strong>Weight:</strong> {selectedParcel.weight}
                </p>
                <p>
                  <strong>Description:</strong> {selectedParcel.description}
                </p>
                <p>
                  <strong>Status:</strong> {selectedParcel.status}
                </p>
                <p>
                  <strong>Rider:</strong> {selectedParcel.rider || "Unassigned"}
                </p>
                <p>
                  <strong>Tracking Timeline:</strong> <br />
                  {selectedParcel.timeline}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
