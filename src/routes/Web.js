import React from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import Homepage from "../resources/pages/Homepage";
import Login from "../resources/pages/auth/Login";
import PageNotFound from "../resources/pages/PageNotFound";
import Dashboard from "../resources/pages/admin/Dashboard";
import Accounts from "../resources/pages/admin/Accounts";
import Settings from "../resources/pages/admin/Settings";
import AdminController from "../app/controllers/AdminController";

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

      <Route
        path="/admin"
        element={<AdminController redirect="dashboard" />}
      ></Route>
      <Route path="/admin/Accounts" element={<Accounts />}></Route>
      <Route path="/admin/Settings" element={<Settings />}></Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Web;
