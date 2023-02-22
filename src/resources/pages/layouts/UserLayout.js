import React from "react";
import "../../../assets/css/admin.css";
import Topbar from "./navs/Topbar";

function UserLayout({ SidebarNav, TopbarNav, children }) {
  return (
    <>
      <Topbar TopbarNav={TopbarNav} SidebarNav={SidebarNav} />
    </>
  );
}

export default UserLayout;
