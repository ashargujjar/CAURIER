import React from "react";
import { Ridernav } from "./Ridernav";
import { Link } from "react-router-dom";

const AssignedParcels = () => {
  // Dummy parcel data — replace with real API data
  const parcels = [
    {
      id: "PK001",
      recipient: "Ahmed Ali",
      address: "123 Main St, Lahore",
      status: "In Transit",
      assignedDate: "2025-07-25",
    },
    {
      id: "PK002",
      recipient: "Sara Khan",
      address: "Block B, Islamabad",
      status: "Delivered",
      assignedDate: "2025-07-24",
    },
    {
      id: "PK003",
      recipient: "Usman Tariq",
      address: "Sector H, Karachi",
      status: "Pending",
      assignedDate: "2025-07-26",
    },
  ];

  return (
    <>
      <Ridernav />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-emerald-700 mb-6">
          Assigned Parcels
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow-md">
            <thead>
              <tr className="bg-emerald-600 text-white text-left">
                <th className="p-3">Parcel ID</th>
                <th className="p-3">Recipient</th>
                <th className="p-3">Address</th>
                <th className="p-3">Status</th>
                <th className="p-3">Assigned Date</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel) => (
                <tr
                  key={parcel.id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="p-3 font-medium">{parcel.id}</td>
                  <td className="p-3">{parcel.recipient}</td>
                  <td className="p-3">{parcel.address}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        parcel.status === "Delivered"
                          ? "bg-green-100 text-green-600"
                          : parcel.status === "In Transit"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {parcel.status}
                    </span>
                  </td>
                  <td className="p-3">{parcel.assignedDate}</td>
                  <td className="p-3 text-center">
                    <Link
                      to="/rider/parcelUpdate"
                      className="text-sm text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1 rounded"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}

              {parcels.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-500">
                    No assigned parcels.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AssignedParcels;
