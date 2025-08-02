import React, { useState, useEffect } from "react";
import { AdminNav } from "./adminNav";
import { useSearchParams } from "react-router-dom";

const AssignRider = () => {
  const [parcelId, setParcelId] = useState("");
  const [selectedRider, setSelectedRider] = useState("");
  const [searchParams] = useSearchParams();

  const id = searchParams.get("parcelId");

  const riders = [
    { id: "r1", name: "Rider A" },
    { id: "r2", name: "Rider B" },
    { id: "r3", name: "Rider C" },
  ];

  const handleAssign = () => {
    if (!parcelId || !selectedRider) return alert("Please fill all fields");
    // Call backend API to assign rider here
    console.log(`Assigning Rider ${selectedRider} to Parcel ${parcelId}`);
  };
  useEffect(() => {
    if (id) {
      setParcelId(id);
    }
  }, [id]);

  return (
    <>
      <AdminNav />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
        <h2 className="text-xl font-bold mb-4">Assign Rider to Parcel</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Parcel ID</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter Parcel ID"
            value={parcelId}
            onChange={(e) => setParcelId(e.target.value)}
            disabled={!!id}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Select Rider</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={selectedRider}
            onChange={(e) => setSelectedRider(e.target.value)}
          >
            <option value="">-- Select Rider --</option>
            {riders.map((rider) => (
              <option key={rider.id} value={rider.id}>
                {rider.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleAssign}
        >
          Assign
        </button>
      </div>
    </>
  );
};

export default AssignRider;
