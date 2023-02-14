import React from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import Homepage from "../resources/pages/Homepage";
import Login from "../resources/pages/auth/Login";
import PageNotFound from "../resources/pages/PageNotFound";
import Action from "../resources/pages/user/Action";
import {
  AdminCheckAuth,
  RedirectIfAuthenticated,
} from "../app/controllers/HomeController";
import Dashboard from "../resources/pages/user/Dashboard";

function Web() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<RedirectIfAuthenticated />} />
      <Route element={<AdminCheckAuth />}>
        <Route path="/admin" element={<Dashboard />}></Route>
        <Route path="/admin/Accounts" element={<accounts />}></Route>
        <Route path="/admin/Settings" element={<settings />}></Route>
      </Route>
      //users
      <Route path="/user" element={<Dashboard />}></Route>
      <Route path="/edititems" element={<Action />}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Web;
