import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Report from "../assets/image/report.svg";
import Data from "../assets/image/data.svg";
import View from "../assets/image/view.svg";

function About() {
  return (
    <div className="about">
      <Grid container sx={{ width: "100%", mt: 5 }}>
        <Grid item xl={4} lg={6} xs={12}>
          {" "}
          <Box sx={{ justifyContent: "center", my: 5, ml: 5 }}>
            {" "}
            <img src={Report} height={300}></img>
          </Box>
        </Grid>
        <Grid item xl={4} lg={6} xs={12}>
          {" "}
          <Box sx={{ justifyContent: "center", my: 5, ml: 5 }}>
            {" "}
            <img src={Data} height={300}></img>
          </Box>
        </Grid>
        <Grid item xl={4} lg={6} xs={12}>
          {" "}
          <Box sx={{ justifyContent: "center", my: 5, ml: 5 }}>
            {" "}
            <img src={View} height={300}></img>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
