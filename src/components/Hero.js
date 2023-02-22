import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Home from "../assets/image/home.svg";

function Hero() {
  return (
    <div>
      <Grid container sx={{ width: "100%", mt: 5 }}>
        <Grid item xl={6} lg={6} xs={12}>
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
            provides a centralized platform for monitoring the purchase order
            process and helps organizations to streamline their supply chain
            operations.
          </Box>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          xs={12}
          sx={{ mt: 3, backgroundColor: "#419f57", borderRadius: 150 }}
        >
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
