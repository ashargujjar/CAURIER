import React from "react";
import Nav from "./Nav";

export const Viewparcel = () => {
  return (
    <>
      <Nav />
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl border p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">📦 Parcel Details</h2>

        {/* Parcel Info */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Parcel ID:</p>
            <p>PRC-123456</p>
          </div>
          <div>
            <p className="font-semibold">Current Status:</p>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">
              In Transit
            </span>
          </div>

          <div>
            <p className="font-semibold">Created:</p>
            <p>2025-07-26</p>
          </div>
          <div>
            <p className="font-semibold">Estimated Delivery:</p>
            <p>2025-07-30</p>
          </div>

          <div className="col-span-2">
            <p className="font-semibold">Receiver:</p>
            <p>Ahmed Khan</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Pickup Address:</p>
            <p>123 ABC Street, Lahore</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Delivery Address:</p>
            <p>456 XYZ Avenue, Islamabad</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Description:</p>
            <p>Electronics - Fragile items</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Weight:</p>
            <p>2.5 kg</p>
          </div>
        </div>

        {/* Rider Info */}
        <div className="pt-4 border-t">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🚚 Rider Info
          </h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-semibold">Name:</span> Ali Raza
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +92 312 3456789
            </p>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="pt-6 border-t">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            📍 Tracking Timeline
          </h3>
          <ol className="relative border-l border-gray-300 text-sm text-gray-700">
            <li className="mb-5 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5 border border-white"></div>
              <p className="font-semibold">Created</p>
              <p className="text-xs text-gray-500">2025-07-26 10:00 AM</p>
            </li>
            <li className="mb-5 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5 border border-white"></div>
              <p className="font-semibold">Assigned to Rider</p>
              <p className="text-xs text-gray-500">2025-07-26 12:00 PM</p>
            </li>
            <li className="mb-5 ml-4">
              <div className="absolute w-3 h-3 bg-yellow-500 rounded-full -left-1.5 top-1.5 border border-white"></div>
              <p className="font-semibold">In Transit</p>
              <p className="text-xs text-gray-500">2025-07-27 09:00 AM</p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 top-1.5 border border-white"></div>
              <p className="font-semibold text-gray-400">Delivered</p>
              <p className="text-xs text-gray-400">Pending</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
