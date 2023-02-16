import { Grid } from "@mui/material";
import React from "react";
import Status from "./Status";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import SummaryTable from "./SummaryTable";
import Topbar from "../layouts/navs/Topbar";
import SearchItem from "./SearchItem";
import { Container } from "@mui/system";
import Main from "../layouts/navs/Main";
import "../../../assets/css/dashboard.css";

function UserDashboard() {
  return (
    <div className="dashboard">
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <div>
          <Status />
          <Container maxWidth="xxl" sx={{ py: 5 }}>
            <SummaryTable />
          </Container>
        </div>
      </Main>
    </div>
  );
}

export default UserDashboard;
