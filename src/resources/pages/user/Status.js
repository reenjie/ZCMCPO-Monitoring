import { Grid } from "@mui/material";
import React from "react";
import BasicCard from "../../../components/Card";
import { FcOvertime, FcShipped, FcInTransit, FcCancel } from "react-icons/fc";

const Status = () => {
  return (
    <div>
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
            icon={<FcInTransit size={50} />}
            desc={"06/19/2023"}
            color1="#CD0404"
          />
        </Grid>
        <Grid item lg={3} sx={{ height: "20%", py: 1 }}>
          <BasicCard
            title={"Cancelled"}
            description={"25"}
            icon={<FcCancel size={50} />}
            desc={"06/19/2023"}
            color1="#CD0404"
          />
        </Grid>
        <Grid item lg={3} sx={{ height: "20%", py: 1 }}>
          <BasicCard
            title={"Extended"}
            description={"25 "}
            icon={<FcOvertime size={50} />}
            desc={"06/19/2023"}
            color1="#F49D1A"
          />
        </Grid>
        <Grid item lg={3} sx={{ height: "20%", py: 1 }}>
          <BasicCard
            title={"Delivered"}
            description={"25  "}
            icon={<FcShipped size={50} />}
            desc={"06/19/2023"}
            color1="green"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Status;
