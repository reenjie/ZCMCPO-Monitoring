import React from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import Homepage from "../resources/pages/Homepage";
import Login from "../resources/pages/auth/Login";
import PageNotFound from "../resources/pages/PageNotFound";
import Accounts from "../resources/pages/admin/Accounts";
import Settings from "../resources/pages/admin/Settings";
import { Auditlog } from "../resources/pages/admin/Auditlog";
import {
  AdminCheckAuth,
  RedirectIfAuthenticated,
  UserCheckAuth,
  SupervisorAuth,
} from "../app/controllers/HomeController";
import Action from "../resources/pages/user/Action";
import Dashboard from "../resources/pages/user/Dashboard";
import { Approval } from "../resources/pages/supervisor/Approval";
import { Evaluation } from "../resources/pages/user/Evaluation";
function Web() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<RedirectIfAuthenticated />} />

      <Route element={<AdminCheckAuth />}>
        <Route path="/admin" element={<Dashboard usertype="admin" />}></Route>
        <Route path="/admin/Accounts" element={<Accounts />}></Route>
        <Route
          path="/admin/AuditLogs"
          element={<Auditlog usertype="admin" />}
        ></Route>
        <Route
          path="/admin/Settings"
          element={<Settings usertype="admin" />}
        ></Route>
      </Route>

      <Route element={<UserCheckAuth />}>
        <Route path="/user" element={<Dashboard usertype="user" />}></Route>
        <Route path="/manage" element={<Action />}></Route>
        <Route path="/user/Evaluation-Form" element={<Evaluation />}></Route>
        <Route
          path="/user/Settings"
          element={<Settings usertype="user" />}
        ></Route>
      </Route>

      <Route element={<SupervisorAuth />}>
        <Route
          path="/Dashboard"
          element={<Dashboard usertype="supervisor" />}
        ></Route>
        <Route
          path="/manage_"
          element={<Action usertype="supervisor" />}
        ></Route>
        <Route
          path="/AuditLogs"
          element={<Auditlog usertype="supervisor" />}
        ></Route>

        <Route
          path="/Settings"
          element={<Settings usertype="supervisor" />}
        ></Route>

        <Route path="/Approval" element={<Approval />}></Route>
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Web;
