import React, { useState, useEffect } from "react";
import "../../../../assets/css/admin.css";
import { AiOutlineLogout } from "react-icons/ai";
import { clearCookie, getCookie } from "../../../../app/hooks/Cookie";
import { question } from "../../../../components/Sweetalert";
import { useLocation } from "react-router-dom";
import { logoutUser } from "../../../../app/controllers/auth/AuthController";
import { Badge } from "@mui/material";
import { fetchForapproval } from "../../../../app/controllers/request/UserRequest";
import { IoMdNotifications } from "react-icons/io";
//ImNotification

const Topbar = ({ SidebarNav, view }) => {
  const location = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const req = await fetchForapproval({});
      if (req.status == 200) {
        setData(req.data.data);
      }
    };
    fetch();
  }, []);
  const action = async () => {
    const res = await logoutUser({ token: getCookie().token.token });

    if (res.status === 200) {
      clearCookie();
      window.location.reload();
    }
  };
  const logout = () => {
    question({
      title: "Are you sure",
      message: "you want to logout?",
      type: "warning",
      btndanger: false,
      action: action,
    });
    // clearCookie();
    // window.location.reload();
  };
  const custombadge = {
    fontSize: "20px",
    marginLeft: "3px",
    fontWeight: "bold",
  };
  return (
    <div className="topbar">
      <h1>P.O Monitoring System</h1>
      <div className="navigation_">
        {view ? (
          ""
        ) : (
          <div className="link">
            {SidebarNav.map((row) => {
              return (
                <>
                  <a
                    key={row.link}
                    href={row.link}
                    className={location.pathname == row.link ? "active" : ""}
                  >
                    {" "}
                    <span className="icons">{row.icon}</span>{" "}
                    <span className="title">{row.title}</span>
                    {location.pathname != "/Approval"
                      ? row.title === "For Approval" && (
                          <Badge
                            sx={{ marginLeft: "18px" }}
                            badgeContent={data.length}
                            color="error"
                          ></Badge>
                        )
                      : ""}
                  </a>
                </>
              );
            })}
          </div>
        )}
      </div>
      <a className="logout" href="javascript:void(0)" onClick={logout}>
        Logout{" "}
        <i className="icon">
          <AiOutlineLogout />
        </i>
      </a>
    </div>
  );
};

export default Topbar;
