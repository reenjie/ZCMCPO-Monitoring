import { api } from "../config/api";
import React from "react";
import Dashboard from "../../resources/pages/admin/Dashboard";
import Accounts from "../../resources/pages/admin/Accounts";
import Settings from "../../resources/pages/admin/Settings";

class AdminController extends React.Component {
  dashboard() {
    const aww = "awcddoo";
    return <Dashboard data={aww} />;
  }

  accounts() {
    const aww = "data";
    return <Accounts />;
  }

  settings() {
    const aww = "data";
    return <Settings />;
  }
}

export default AdminController;
