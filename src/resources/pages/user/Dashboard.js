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

function Dashboard() {
  return (
    <div>
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <div>
          <Status />
          <Container maxWidth="xxl" sx={{ py: 5 }}>
            <Grid item display={"flex"} justifyContent="left" sx={{ py: 5 }}>
              <SearchItem />
            </Grid>
            <SummaryTable />
          </Container>
        </div>
      </Main>
    </div>
  );
}

export default Dashboard;
