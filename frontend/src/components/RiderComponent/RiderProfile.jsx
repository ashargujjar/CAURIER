import React from "react";
import { Ridernav } from "./Ridernav";

const RiderProfile = () => {
  // Replace this with actual rider data from context or API
  const rider = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    joinedDate: "2024-01-15",
  };

  const handleLogout = () => {
    // You can clear auth/session token here
    alert("Logged out!");
    // redirect to login if needed
  };

  return (
    <>
      <Ridernav />
      <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-700">
          Rider Profile
        </h2>

        <div className="bg-white shadow-md rounded-lg p-6 max-w-xl">
          <div className="mb-4">
            <p className="text-gray-600 font-medium">Name</p>
            <p className="text-lg">{rider.name}</p>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 font-medium">Email</p>
            <p className="text-lg">{rider.email}</p>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 font-medium">Phone</p>
            <p className="text-lg">{rider.phone}</p>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 font-medium">Joined Date</p>
            <p className="text-lg">{rider.joinedDate}</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default RiderProfile;
