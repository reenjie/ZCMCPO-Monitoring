import React from "react";
import { useState, useEffect } from "react";
import logo from "../../../../assets/image/zcmc_logo.png";
import "../../../../assets/css/admin.css";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../../../app/hooks/ContextHooks";
import { ThreeDots } from "react-loader-spinner";
import { FallingLines } from "react-loader-spinner";

function Sidebar({ SidebarNav }) {
  const location = useLocation();
  const { Auth } = useAuth();

  return (
    <div className="sidebar">
      <div className="userinfo">
        <img src={logo} alt="" />
        <h2>
          {Auth.user ? (
            <>
              <span>Hi! </span> <br /> {Auth.user.name}
            </>
          ) : (
            <FallingLines
              color="#4fa94d"
              width="50"
              height="20px"
              visible={true}
              ariaLabel="falling-lines-loading"
            />

            // <ThreeDots
            //   height="35"
            //   width="80"
            //   radius="9"
            //   color="#4fa94d"
            //   ariaLabel="three-dots-loading"
            //   wrapperStyle={{}}
            //   wrapperClassName=""
            //   visible={true}
            // />
          )}
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
