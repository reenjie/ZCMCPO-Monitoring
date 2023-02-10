import React from "react";
import "../../../../assets/css/admin.css";
import { AiOutlineLogout } from "react-icons/ai";
import { clearCookie } from "../../../../app/hooks/Cookie";
import { question } from "../../../../components/Sweetalert";
function Topbar() {
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
      <a href="#" onClick={logout}>
        Logout{" "}
        <i className="icon">
          <AiOutlineLogout />
        </i>
      </a>
    </div>
  );
}

export default Topbar;
