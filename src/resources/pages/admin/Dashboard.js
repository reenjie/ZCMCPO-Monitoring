import React, { useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { AdminSidebar } from "../layouts/navs/NavData";
import Main from "../layouts/navs/Main";

function Dashboard(props) {
  return (
    <div>
      <AdminLayout SidebarNav={AdminSidebar} />
      <Main>
        <h3>Dashboard</h3>

        {props.data}
      </Main>
    </div>
  );
}

export default Dashboard;
