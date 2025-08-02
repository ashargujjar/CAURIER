import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/Forget";
import { UserDashboard } from "./components/Usercomponent/UserDashboard";
import { ParcelHistory } from "./components/Usercomponent/ParcelHistory";
import { Viewparcel } from "./components/Usercomponent/Viewparcel";
import TrackParcel from "./components/Usercomponent/Trackparcel";
import { Admin } from "./components/Admindasboard/admin";
import { AllParcels } from "./components/Admindasboard/Allparcels";
import AssignRider from "./components/Admindasboard/Assignrider";
import { ChangeparcelStatus } from "./components/Admindasboard/ChangeparcelStatus";
import { Rider } from "./components/RiderComponent/Rider";
import AssignedParcels from "./components/RiderComponent/RiderAssigned";
import UpdateParcelStatus from "./components/RiderComponent/updateParcel";
import RiderProfile from "./components/RiderComponent/RiderProfile";
import CreateParcel from "./components/Usercomponent/AddParcel";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot", element: <ForgotPassword /> },
  { path: "/user/dashboard", element: <UserDashboard /> },
  { path: "/parcel/create", element: <CreateParcel /> },
  { path: "/parcel/history", element: <ParcelHistory /> },
  { path: "/view/parcel/:id", element: <Viewparcel /> },
  { path: "/parcel/track", element: <TrackParcel /> },
  { path: "/admin/dashboard", element: <Admin /> },
  { path: "/admin/parcels", element: <AllParcels /> },
  { path: "/admin/assign", element: <AssignRider /> },
  { path: "/admin/status", element: <ChangeparcelStatus /> },
  { path: "/rider/dashboard", element: <Rider /> },
  { path: "/rider/parcels", element: <AssignedParcels /> },
  { path: "/rider/parcelUpdate", element: <UpdateParcelStatus /> },
  { path: "/rider/profile", element: <RiderProfile /> },
]);
export default router;
