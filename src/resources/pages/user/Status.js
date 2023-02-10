import { Grid } from "@mui/material";
import React from "react";
import BasicCard from "../../../components/Card";

const Status = () => {
  return (
    <div>
      <Grid container sx={{ width: "100%", px: 2 }}>
        <Grid item xl={4} sx={{ px: 5, height: "25%" }}>
          <BasicCard title={"Delivered"} description={"25 item"} />
        </Grid>
        <Grid item xl={4} sx={{ px: 5, height: "25%" }}>
          <BasicCard title={"Undelivered"} description={"25 item"} />
        </Grid>
        <Grid item xl={4} sx={{ px: 5, height: "25%" }}>
          <BasicCard title={"Extended"} description={"25 item"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Status;
