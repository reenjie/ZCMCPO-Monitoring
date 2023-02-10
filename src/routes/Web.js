import React from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import Homepage from "../resources/pages/Homepage";
import Login from "../resources/pages/auth/Login";
import PageNotFound from "../resources/pages/PageNotFound";

/* Controllers */
import AdminController from "../app/controllers/AdminController";
import UserController from "../app/controllers/UserController";

let administrator = new AdminController();
let user = new UserController();
function Web() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route element={<AdminAuth />}>
              <Route path="/admin" element={<AdminInfo />} />
              <Route path="/adminview" element={<Admin />} />
              <Route path="/role" element={<Role />} />
            </Route> */}
      <Route path="/admin" element={<administrator.dashboard />}></Route>
      <Route
        path="/admin/Accounts"
        element={<administrator.accounts />}
      ></Route>
      <Route
        path="/admin/Settings"
        element={<administrator.settings />}
      ></Route>
      <Route path="/user" element={<user.dashboard />}></Route>
      <Route path="/user/editItems" element={<user.editItems />}></Route>
      <Route path="/user/Settings" element={<user.settings />}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Web;
