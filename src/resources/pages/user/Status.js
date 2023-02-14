import { Grid } from "@mui/material";
import React from "react";
import BasicCard from "../../../components/Card";
import { FcOvertime, FcShipped, FcInTransit } from "react-icons/fc";

const Status = () => {
  return (
    <div>
      <Grid container sx={{ width: "100%" }}>
        <Grid item xl={4} sx={{ px: 5, height: "25%" }}>
          <BasicCard
            title={"Delivered"}
            description={"25 item"}
            icon={<FcShipped />}
          />
        </Grid>
        <Grid item xl={4} sx={{ px: 5, height: "25%" }}>
          <BasicCard
            title={"Undelivered"}
            description={"25 item"}
            icon={<FcInTransit />}
          />
        </Grid>
        <Grid item xl={4} sx={{ px: 5, height: "25%" }}>
          <BasicCard
            title={"Extended"}
            description={"25 item"}
            icon={<FcOvertime />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Status;
