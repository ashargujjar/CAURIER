import React, { useState } from "react";
import { Ridernav } from "./Ridernav";

const UpdateParcelStatus = () => {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState("In Transit");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with actual API call
    try {
      const response = await fetch(`/api/parcel/${trackingId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();
      alert("Status updated successfully");
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  return (
    <>
      <Ridernav />
      <div className="p-4 md:p-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6">
          Update Parcel Status
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Tracking ID
            </label>
            <input
              type="text"
              required
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-emerald-300"
              placeholder="Enter Tracking ID"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              New Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-emerald-300"
            >
              <option>In Transit</option>
              <option>Delivered</option>
              <option>Returned</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-4 py-2 rounded"
          >
            Update Status
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateParcelStatus;
