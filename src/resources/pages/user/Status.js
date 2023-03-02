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
        <BasicCard
          title={"Undelivered"}
          description={"25  "}
          icon={<FcInTransit size={50} />}
          desc={"06/19/2023"}
          color1="#F48484"
        />

        <BasicCard
          title={"Cancelled"}
          description={"25"}
          icon={<FcCancel size={50} />}
          desc={"06/19/2023"}
          color1="#F48484"
        />

        <BasicCard
          title={"Extended"}
          description={"25 "}
          icon={<FcOvertime size={50} />}
          desc={"06/19/2023"}
          color1="#FEBE8C"
        />

        <BasicCard
          title={"Delivered"}
          description={"25  "}
          icon={<FcShipped size={50} />}
          desc={"06/19/2023"}
          color1="#68B984"
        />
      </Grid>
    </div>
  );
};

export default Status;
