import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { question } from "../components/Sweetalert";
function ManageItems() {
  const cancel = () => {
    question({
      title: "Are you sure",
      message:
        "mark transaction as cancelled?" + "\n" + "You cannot revert changes!",
      type: "warning",
      btndanger: false,
      // action: Action,
    });
  };
  const undeliver = () => {
    question({
      title: "Are you sure",
      message:
        "mark transaction as undelivered?" +
        "\n" +
        " You cannot revert changes!",
      type: "warning",
      btndanger: false,
      // action: Action,
    });
  };
  const extend = () => {
    question({
      title: "Are you sure",
      message:
        "mark transaction as extended?" + "\n" + "You cannot revert changes!",
      type: "warning",
      btndanger: false,
      // action: Action,
    });
  };
  const deliver = () => {
    question({
      title: "Are you sure",
      message:
        "mark transaction as delivered?" + "\n" + "You cannot revert changes!",
      type: "warning",
      btndanger: false,
      // action: Action,
    });
  };
  const remarks = () => {};
  return (
    <div>
      <div className="">
        <Typography
          sx={{
            fontSize: 14,
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Action
        </Typography>
        <Stack spacing={1.5}>
          <Button
            sx={{ width: "200px", backgroundColor: "#BE0000" }}
            variant="contained"
            onClick={cancel}
          >
            Cancelled
          </Button>
          <Button
            sx={{ width: "200px", backgroundColor: "#FF8E00" }}
            variant="contained"
            onClick={undeliver}
          >
            Undelivered
          </Button>
          <Button
            sx={{
              width: "200px",
              backgroundColor: "#FFCC29",
            }}
            variant="contained"
            onClick={extend}
          >
            Extended
          </Button>
          <Button
            sx={{ width: "200px", backgroundColor: "#61B15A" }}
            variant="contained"
            onClick={deliver}
          >
            Delivered
          </Button>
          <Button
            sx={{ width: "200px", backgroundColor: "#2C786C" }}
            variant="contained"
            onClick={remarks}
          >
            Remarks
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default ManageItems;
