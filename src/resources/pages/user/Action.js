import React, { useState, useEffect } from "react";
import "../../../assets/css/action.css";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import { Button } from "@mui/material";
import Transaction from "../../../components/Transaction";
import { CiCircleList } from "react-icons/ci";

import { useLocation, useNavigate } from "react-router-dom";
const Action = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selection = location.state;
  const [openModal, setopenModal] = useState(false);
  const applyall = () => {};

  return (
    <div>
      <UserLayout SidebarNav={UserSidebar} view={true} />

      <Button
        variant="contained"
        size="small"
        style={{ position: "absolute", top: "70px", left: "20px" }}
        onClick={() => {
          navigate("/user");
        }}
      >
        Back
      </Button>

      <h2
        style={{
          marginTop: "70px",
          marginLeft: "100px",
          textTransform: "uppercase",
          color: "#658864",
        }}
      >
        <span
          style={{
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Managing Item{selection.length >= 2 ? "s" : ""}{" "}
          <CiCircleList style={{ paddingTop: "2px" }} />
        </span>
        <span
          style={{
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          {/* <ActionModal
            Modalbtn={
              <Button
                color="success"
                onClick={() => {
                  setopenModal(true);
                }}
              >
                APPLY TO ALL
              </Button>
            }
            openModal={openModal}
            setopenModal={setopenModal}
          /> */}
        </span>
      </h2>

      <div style={{ marginTop: "-100px" }}>
        <Transaction selection={selection} />
      </div>
    </div>
  );
};

export default Action;
