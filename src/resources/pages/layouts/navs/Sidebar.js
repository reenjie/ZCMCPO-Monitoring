import React from "react";
import { useState, useEffect } from "react";
import logo from "../../../../assets/image/zcmc_logo.png";
import "../../../../assets/css/admin.css";
import { useHistory, useLocation } from "react-router-dom";

function Sidebar({ SidebarNav }) {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="userinfo">
        <img src={logo} alt="" />
        <h2>
          <span>Hi! </span> <br /> Reenjay Caimor
        </h2>
      </div>
      <div className="navigation_sidebar">
        <div className="link">
          {SidebarNav.map((row) => {
            return (
              <>
                <a
                  href={row.link}
                  className={location.pathname == row.link ? "active" : ""}
                >
                  {" "}
                  <span className="icon">{row.icon}</span>{" "}
                  <span className="title">{row.title}</span>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
