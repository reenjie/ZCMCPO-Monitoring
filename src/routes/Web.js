import React from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import Homepage from "../resources/pages/Homepage";
import Login from "../resources/pages/auth/Login";
import User from "../resources/pages/User";
import PageNotFound from "../resources/pages/PageNotFound";

/* Controllers */
import AdminController from "../app/controllers/AdminController";
import UserController from "../app/controllers/UserController";
import HomeController from "../app/controllers/HomeController";

/* Instantiate Controller Classes */
let administrator = new AdminController();
<<<<<<< HEAD
let user = new UserController();
=======
//acoco
>>>>>>> 46a98135b7d9478904182d3d1e3763b4eb64bc40
function Web() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route element={<HomeController />}>
        <Route path="/admin" element={<administrator.dashboard />}></Route>
        <Route
          path="/admin/Accounts"
          element={<administrator.accounts />}
        ></Route>
        <Route
          path="/admin/Settings"
          element={<administrator.settings />}
        ></Route>
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Web;
