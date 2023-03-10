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
            provides a centralized platform for monitoring the purchase order
            process and helps organizations to streamline their supply chain
            operations.
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
