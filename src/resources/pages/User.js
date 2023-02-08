import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import Dashboard from "../../components/Dashboard";
import UserTable from "../../components/UserTable";
import Search from "../../components/Search";

const User = () => {
  return (
    <div class="user">
      <Grid
        container
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Grid item xl={12} sx={{ px: 4 }}>
          <Navbar />
        </Grid>
        <Grid item xl={12} sx={{ p: 4 }}>
          <Dashboard />
        </Grid>
        <Grid item xl={12} sx={{ p: 4 }}>
          <Search />
        </Grid>
        <Grid
          display="flex"
          justifyContent={"center"}
          item
          xl={12}
          sx={{ px: 5 }}
        >
          {" "}
          <UserTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default User;
