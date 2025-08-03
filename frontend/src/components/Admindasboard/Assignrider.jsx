import React, { useState, useEffect } from "react";
import { AdminNav } from "./adminNav";
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const AssignRider = () => {
  const [parcelId, setParcelId] = useState("");
  const [selectedRider, setSelectedRider] = useState("");
  const [searchParams] = useSearchParams();
  const [riders, setRiders] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = searchParams.get("parcelId");

  const handleAssign = async () => {
    const backendUrl = process.env.REACT_APP_BACKENDURL;

    if (!parcelId || !selectedRider) return alert("Please fill all fields");
    setLoading(true);
    const resp = await fetch(`${backendUrl}/admin/assignRider`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parcelId: parcelId,
        riderId: selectedRider,
      }),
    });
    if (resp.ok) {
      setLoading(false);
      toast.success("Rider assigned succesfull");
    } else {
      setLoading(false);
      toast.error("Rider already assigned or try again");
    }
  };
  useEffect(() => {
    if (id) {
      setParcelId(id);
    }
    async function getRiders() {
      setLoading(true);
      const resp = await fetch("http://localhost:3000/admin/getRiders");
      if (resp.ok) {
        const body = await resp.json();
        setRiders(body);
        setLoading(false);
      }
    }
    getRiders();
  }, [id]);

  return (
    <>
      <ToastContainer />
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
            {loading ? (
              <span class="loading loading-spinner loading-md"></span>
            ) : riders.length > 0 ? (
              riders.map((rider) => (
                <option key={rider._id} value={rider._id}>
                  {rider.name}
                </option>
              ))
            ) : (
              <p>No rider availaible</p>
            )}
          </select>
        </div>

        {loading ? (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled
          >
            <span class="loading loading-spinner loading-md"></span>
          </button>
        ) : (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleAssign}
          >
            Assign
          </button>
        )}
      </div>
    </>
  );
};

export default AssignRider;
