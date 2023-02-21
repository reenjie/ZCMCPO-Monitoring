import { Grid } from "@mui/material";
import React from "react";
import BasicCard from "../../../components/Card";
import { FcOvertime, FcShipped, FcInTransit } from "react-icons/fc";

const Status = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      lg={12}
      sx={{ width: "100%" }}
    >
      <Grid item lg={3} sx={{ height: "20%", py: 1 }}>
        <BasicCard
          title={"Undelivered"}
          description={"25  "}
          icon={<FcInTransit />}
          desc={"as of June 19, 2023"}
          bgcolor="#F07470"
          color="#fff"
        />
      </Grid>
      <Grid item lg={3} sx={{ height: "20%", py: 1 }}>
        <BasicCard
          title={"Cancelled"}
          description={"25"}
          icon={<FcOvertime />}
          desc={"as of June 19, 2023"}
          bgcolor="#F07470"
          color="#fff"
        />
      </Grid>
      <Grid item lg={3} sx={{ height: "20%", py: 1 }}>
        <BasicCard
          title={"Extended"}
          description={"25 "}
          icon={<FcOvertime />}
          desc={"as of June 19, 2023"}
          bgcolor="#FFDAC1"
        />
      </Grid>
      <Grid item lg={3} sx={{ height: "20%", py: 1 }}>
        <BasicCard
          title={"Delivered"}
          description={"25  "}
          icon={<FcShipped />}
          desc={"as of June 19, 2023"}
          bgcolor="#B5EAD7"
        />
      </Grid>
    </Grid>
  );
};

export default Status;
