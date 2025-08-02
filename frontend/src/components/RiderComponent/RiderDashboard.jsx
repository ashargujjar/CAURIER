import React from "react";

const RiderDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-emerald-700 mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Assigned Parcels Summary */}
        <div className="bg-white shadow-md rounded-lg p-5 border-l-4 border-emerald-600">
          <h2 className="text-lg font-semibold text-gray-700">
            Assigned Parcels
          </h2>
          <p className="text-3xl font-bold text-emerald-600 mt-2">12</p>
          <p className="text-sm text-gray-500">
            Total parcels currently assigned to you
          </p>
        </div>

        {/* Delivered Parcels */}
        <div className="bg-white shadow-md rounded-lg p-5 border-l-4 border-emerald-600">
          <h2 className="text-lg font-semibold text-gray-700">
            Delivered Parcels
          </h2>
          <p className="text-3xl font-bold text-emerald-600 mt-2">30</p>
          <p className="text-sm text-gray-500">
            Parcels successfully delivered
          </p>
        </div>

        {/* Pending Updates */}
        <div className="bg-white shadow-md rounded-lg p-5 border-l-4 border-yellow-500">
          <h2 className="text-lg font-semibold text-gray-700">
            Status Updates Needed
          </h2>
          <p className="text-3xl font-bold text-yellow-500 mt-2">3</p>
          <p className="text-sm text-gray-500">
            Parcels awaiting status update
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;
