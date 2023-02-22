import React from "react";
import "../../../../assets/css/admin.css";
import { AiOutlineLogout } from "react-icons/ai";
import { clearCookie } from "../../../../app/hooks/Cookie";
import { question } from "../../../../components/Sweetalert";
import { useLocation } from "react-router-dom";
function Topbar({ SidebarNav }) {
  const location = useLocation();
  const Action = () => {
    clearCookie();
    window.location.reload();
  };
  const logout = () => {
    question({
      title: "Are you sure",
      message: "you want to logout?",
      type: "warning",
      btndanger: false,
      action: Action,
    });
    // clearCookie();
    // window.location.reload();
  };
  return (
    <div className="topbar">
      <h1>P.O Monitoring System</h1>
      <div className="navigation_">
        <div className="link">
          {SidebarNav.map((row) => {
            return (
              <>
                <a
                  key={row.link}
                  href={row.link}
                  className={location.pathname == row.link ? " active" : ""}
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
      <a className="logout" href="#" onClick={logout}>
        Logout{" "}
        <i className="icon">
          <AiOutlineLogout />
        </i>
      </a>
    </div>
  );
}

export default Topbar;
