import { Box, Grid, ImageList, TextField, Button } from "@mui/material";
import React from "react";
import Logo from "../assets/image/zcmc_logo.png";
import DrawerComponent from "./DrawerComponent";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Grid container sx={{ width: "90%" }}>
        <Grid item xl={10} lg={10} sx={{ height: "60px", mt: 2 }}>
          <Box display="flex">
            <img src={Logo} height={60} />
            <Box
              sx={{
                height: "50px",
                fontSize: "30px",
                fontWeight: 800,
                color: "green",
                mx: 4,
                mt: 1,
              }}
            >
              ZCMC
            </Box>
          </Box>
        </Grid>
        <DrawerComponent />
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </Grid>
    </div>
  );
}

export default Navbar;
