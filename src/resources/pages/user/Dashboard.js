import { Grid } from "@mui/material";
import React from "react";
import Status from "./Status";
import CustomPaginationActionsTable from "../../../components/Table";
import Navbar from "../../../components/Navbar";
import SummaryTable from "./SummaryTable";
import Topbar from "../layouts/navs/Topbar";
import SearchItem from "./SearchItem";
import { Container } from "@mui/system";

function Dashboard() {
  return (
    <div>
      <Grid container sx={{ width: "100%", height: "100vh" }}>
        <Grid item xl={12} sx={{ width: "100%", height: "10vh" }}>
          <Topbar />
        </Grid>
        <Grid item xl={12} sx={{ width: "100%", height: "20vh" }}>
          <Status />
        </Grid>
        <Grid item xl={12} sx={{ width: "100%", height: "10vh" }}>
          <SearchItem />
        </Grid>
        <Grid
          item
          display="flex"
          alignItems="center"
          xl={12}
          sx={{
            mt: 0,
            height: "60vh",
            pt: 0,
          }}
        >
          {" "}
          <Container maxWidth="xxl">
            {" "}
            <SummaryTable />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
