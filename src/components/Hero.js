import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Home from "../assets/image/home.svg";

function Hero() {
  return (
    <div>
      <Grid container sx={{ width: "100%", mt: 5 }}>
        <Grid item xl={6} xs={12}>
          <Box
            sx={{
              fontSize: "70px",
              fontWeight: "60px",
              color: "#419f57",
              mx: 5,
              mt: 10,
              textAlign: "center",
            }}
          >
            Purchased Order Monitoring System
          </Box>
          <Box
            sx={{
              fontSize: "20px",
              m: 5,
            }}
          >
            a software application that helps businesses manage their
            procurement processes, from generating purchase orders to tracking
            the delivery of goods and services. The system provides a
            centralized platform for monitoring the purchase order process and
            helps organizations to streamline their supply chain operations.
          </Box>
        </Grid>
        <Grid
          item
          xl={6}
          xs={12}
          sx={{ mt: 3, backgroundColor: "#419f57", borderRadius: 150 }}
        >
          {" "}
          <img src={Home} height={600}></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
