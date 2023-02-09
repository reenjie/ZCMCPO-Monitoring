import { api } from "../config/api";
import React from "react";
import Dashboard from "../../resources/pages/admin/Dashboard";

function AdminController({ redirect }) {
  switch (redirect) {
    case "dashboard":
      const aww = "data";
      return <Dashboard data={aww} />;
      break;
  }
}

export default AdminController;
