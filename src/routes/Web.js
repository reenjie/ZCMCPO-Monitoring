import React from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import Homepage from "../resources/pages/Homepage";
import Login from "../resources/pages/auth/Login";
import PageNotFound from "../resources/pages/PageNotFound";
import Accounts from "../resources/pages/admin/Accounts";
import Settings from "../resources/pages/admin/Settings";
import Dashboard from "../resources/pages/admin/Dashboard";
import {
  AdminCheckAuth,
  RedirectIfAuthenticated,
} from "../app/controllers/HomeController";
import Action from "../resources/pages/user/Action";
function Web() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<RedirectIfAuthenticated />} />
      <Route element={<AdminCheckAuth />}>
        <Route path="/admin" element={<Dashboard />}></Route>
        <Route path="/admin/Accounts" element={<Accounts />}></Route>
        <Route path="/admin/Settings" element={<Settings />}></Route>
      </Route>
      //users
      <Route path="/user" element={<Dashboard />}></Route>
      <Route path="/edititems" element={<Action />}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Web;
