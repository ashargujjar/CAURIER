import React from "react";
import { Link } from "react-router-dom";

export const AdminNav = () => {
  return (
    <nav className="bg-gray-800 text-white w-full flex items-center justify-between px-6 py-4 shadow-md">
      <Link to="/admin/dashboard">
        <div className="text-xl font-bold">Admin Dashboard</div>
      </Link>
      <ul className="flex space-x-6 text-sm">
        <li>
          <Link to="/admin/parcels" className="hover:text-blue-400">
            All Parcels
          </Link>
        </li>
        <li>
          <Link to="/admin/assign" className="hover:text-blue-400">
            Assign Rider
          </Link>
        </li>
        <li>
          <Link to="/admin/status" className="hover:text-blue-400">
            Update Status
          </Link>
        </li>
      </ul>
    </nav>
  );
};
