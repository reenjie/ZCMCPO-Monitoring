import React from "react";
import "../../../assets/css/admin.css";
import Topbar from "./navs/Topbar";

function AdminLayout({ SidebarNav, TopbarNav, children }) {
  return (
    <>
      <Topbar TopbarNav={TopbarNav} SidebarNav={SidebarNav} />
    </>
  );
}

export default AdminLayout;
