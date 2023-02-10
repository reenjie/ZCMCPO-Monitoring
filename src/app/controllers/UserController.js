import { api } from "../config/api";
import React from "react";
import Dashboard from "../../resources/pages/user/Dashboard";
import EditItems from "../../resources/pages/user/Action";

class UserController extends React.Component {
  dashboard() {
    const aww = "data";
    return <Dashboard />;
  }
  editItems() {
    return <EditItems />;
  }
}

export default UserController;
