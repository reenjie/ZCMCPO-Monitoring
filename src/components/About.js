import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Report from "../assets/image/report.svg";
import Data from "../assets/image/data.svg";
import View from "../assets/image/view.svg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../assets/css/user.css";

function About() {
  return (
    <div className="about">
      <Grid container sx={{ width: "100%", mt: 5 }}>
        <Grid item xl={4} lg={6} xs={12}>
          {" "}
          <Card
            sx={{
              justifyContent: "center",
              my: 5,
              mx: 3,
              height: "35rem",
              borderRadius: "10px",
              boxShadow:
                "8px 8px 8px 8px rgba(0, 0, 0, 0.2) 2px 6px 20px 2px rgba(0, 0, 0, 0.19)",
            }}
          >
            <CardContent>
              <img src={Report} height={300} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 600,
                  color: "green",
                }}
              >
                Data optimization
              </Typography>
              <Typography sx={{ textAlign: "justify", fontSize: "20px" }}>
                improves the efficiency and effectiveness of data storage,
                retrieval, processing, and analysis. It involves various
                techniques and strategies aimed at reducing data redundancy,
                improving data quality, and enhancing data processing speed and
                accuracy.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={4} lg={6} xs={12}>
          <Card
            sx={{
              justifyContent: "center",
              my: 5,
              mx: 3,
              height: "35rem",
            }}
          >
            <CardContent>
              <img src={Data} height={300} />{" "}
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 600,
                  color: "green",
                }}
              >
                Real-Time Monitoring System
              </Typography>
              <Typography sx={{ textAlign: "justify", fontSize: "20px" }}>
                provide continuous visibility into the performance of
                operations, It enables to quickly identify any issues and take
                corrective actions to mitigate their impact.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={4} lg={6} xs={12}>
          <Card
            sx={{ justifyContent: "center", my: 5, mx: 3, height: "35rem" }}
          >
            <CardContent>
              <img src={View} height={300} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 600,
                  color: "green",
                }}
              >
                Proactive Maintenance
              </Typography>
              <Typography sx={{ textAlign: "justify", fontSize: "20px" }}>
                improves the efficiency and effectiveness of data storage,
                retrieval, processing, and analysis. It involves various
                techniques and strategies aimed at reducing data redundancy,
                improving data quality, and enhancing data processing speed and
                accuracy.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
