import React from "react";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../../../data/NavData";
import Main from "../layouts/navs/Main";
import { Grid, Paper } from "@mui/material";
export const Evaluation = () => {
  return (
    <div>
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <Grid container spacing={2} mt={2}>
          <Grid xs={6} md={2}></Grid>
          <Grid xs={6} md={8}>
            <Grid container spacing={2} mt={2}>
              <Grid xs={6} md={6}>
                <Paper sx={{ marginBottom: "10px" }}>asdas</Paper>
                <Paper elevation={3} sx={{ padding: "20px" }}>
                  <h4>Evaluation</h4>
                </Paper>
              </Grid>

              <Grid xs={6} md={6}></Grid>
            </Grid>
          </Grid>
          <Grid xs={6} md={2}></Grid>
        </Grid>
      </Main>
    </div>
  );
};
