import { api } from "../config/api";
import React, { useState } from "react";
import Dashboard from "../../resources/pages/admin/Dashboard";
import Accounts from "../../resources/pages/admin/Accounts";
import Settings from "../../resources/pages/admin/Settings";
import { FetchRoles } from "./auth/AuthController";
import { FetchUserData } from "./request/AdminRequest";
import axios from "axios";

class AdminController extends React.Component {
  dashboard() {
    const aww = "awcddoo";

    return <Dashboard data={aww} />;
  }

  accounts() {
    const fetchRoles = async () => {
      const res = await FetchRoles();
      return res;
    };

    const fetchData = async () => {
      const res = await FetchUserData();
      return res;
    };

    return <Accounts Roles={fetchRoles()} Data={fetchData()} />;
  }

  settings() {
    const aww = "data";
    return <Settings />;
  }
}

export default AdminController;
