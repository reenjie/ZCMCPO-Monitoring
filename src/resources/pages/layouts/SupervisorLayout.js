import React from "react";
import "../../../assets/css/admin.css";
import Topbar from "./navs/Topbar";

function SupervisorLayout({ SidebarNav, TopbarNav, children, view }) {
  return (
    <>
      <Topbar TopbarNav={TopbarNav} SidebarNav={SidebarNav} view={view} />
    </>
  );
}

export default SupervisorLayout;
