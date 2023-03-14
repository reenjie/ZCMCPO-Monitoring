import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Home from "../assets/image/home.svg";
import "../assets/css/user.css";

function Hero() {
  return (
    <div classname="hero">
      <Grid container sx={{ width: "100%", mt: 5 }}>
        <Grid item xl={6} lg={6} xs={12}>
          <Box
            sx={{
              fontSize: "40px",
              color: "#285430",
              mx: 5,
              mt: 10,
              textAlign: "center",
            }}
          >
            <h1>PR to Issuance </h1>
            <h3>Monitoring System</h3>
          </Box>
          <Box
            sx={{
              fontSize: "20px",
              m: 5,
              textAlign: "center",
            }}
          >
            software tool that automates the process of tracking the progress of
            purchase requests to in ZCMC Material Management Supply(MMS) from
            the time a request is submitted to the time it is fulfilled and
            issued as a purchase order.
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} xs={12}>
          {" "}
          <Box>
            {" "}
            <img src={Home} height={500}></img>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
