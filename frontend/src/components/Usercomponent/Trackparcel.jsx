import React, { useEffect, useState } from "react";
import Nav from "./Nav";

const TrackParcel = () => {
  const [trackingId, setTrackingId] = useState("");
  const [parcel, setParcel] = useState(null); // Simulated parcel info
  const [parcels, setparcels] = useState();

  const handleTrack = () => {
    // Simulate fetching data
    setParcel({
      id: trackingId,
      status: "In Transit",
      rider: {
        name: "Ali Khan",
        phone: "03XX-XXXXXXX",
      },
      timeline: ["Created", "Assigned", "In Transit", "Delivered"],
    });
  };

  return (
    <>
      <Nav />

      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Track Your Parcel
        </h1>

        <div className="flex items-center space-x-2 mb-6">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter Tracking ID"
            className="input input-bordered w-full"
          />
          <button
            onClick={handleTrack}
            className="btn bg-blue-600 text-white hover:bg-blue-700"
          >
            Track
          </button>
        </div>

        {parcel && (
          <div className="bg-white shadow rounded-xl p-6 space-y-4 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700">
              Tracking ID: <span className="text-gray-900">{parcel.id}</span>
            </h2>

            <div>
              <p className="font-medium text-gray-600">Current Status:</p>
              <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-700">
                {parcel.status}
              </span>
            </div>

            {parcel.rider && (
              <div>
                <p className="font-medium text-gray-600">Rider Info:</p>
                <p className="text-gray-800">{parcel.rider.name}</p>
                <p className="text-gray-600">{parcel.rider.phone}</p>
              </div>
            )}

            <div>
              <p className="font-medium text-gray-600 mb-2">
                Tracking Timeline:
              </p>
              <div className="flex items-center space-x-4">
                {parcel.timeline.map((stage, index) => (
                  <div key={stage} className="flex items-center">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        index <= parcel.timeline.indexOf(parcel.status)
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {stage}
                    </div>
                    {index < parcel.timeline.length - 1 && (
                      <div className="w-6 h-0.5 bg-gray-300 mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TrackParcel;
