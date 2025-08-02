import React from "react";
import { Link } from "react-router-dom";

export const UserHero = () => {
  return (
    <div className="h-screen bg-cover bg-center" id="userHero">
      <div className="absolute inset-0 bg-black/45 z-0"></div>

      <div className="absolute z-20 top-1/2  left-1/2 w-full md:max-w-auto    text-white p-8 -translate-x-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <h1 className="text-2xl  md:text-4xl font-bold text-center ">
          We Welcome You Ashar Ashraf
        </h1>
        <p className="mt-4 text-center  text-xl">
          Create Parcel Now To Get Our Best Services
        </p>
        <div className="flex mt-8 justify-center">
          <Link
            to="/parcel/create"
            className=" bg-emerald-900  border-none shadow-none mx-auto  btn btn-soft btn-accent text-white"
          >
            Create Parcel Now
          </Link>
        </div>
      </div>
    </div>
  );
};
