import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { question } from "../components/Sweetalert";
import { SetStatus } from "../app/controllers/request/UserRequest";
function ManageItems({ id }) {
  const cancel = async () => {
    const res = await SetStatus({
      id: id,
      typeofaction: "cancel",
    });
  };

  const undeliver = async () => {
    const res = await SetStatus({
      id: id,
      typeofaction: "undeliver",
    });
  };

  const extend = async () => {
    const res = await SetStatus({
      id: id,
      typeofaction: "extend",
    });
  };

  const deliver = async () => {
    const res = await SetStatus({
      id: id,
      typeofaction: "deliver",
    });
  };

  const remarks = async () => {
    const res = await SetStatus({
      id: id,
      typeofaction: "remarks",
    });
  };
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
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to cancel transaction?",
                type: "warning",
                btndanger: false,
                action: cancel,
              });
            }}
          >
            Cancelled
          </Button>
          <Button
            sx={{ width: "200px", backgroundColor: "#FF8E00" }}
            variant="contained"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to cancel transaction?",
                type: "warning",
                btndanger: false,
                action: undeliver,
              });
            }}
          >
            Undelivered
          </Button>
          <Button
            sx={{
              width: "200px",
              backgroundColor: "#FFCC29",
            }}
            variant="contained"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to cancel transaction?",
                type: "warning",
                btndanger: false,
                action: extend,
              });
            }}
          >
            Extended
          </Button>
          <Button
            sx={{ width: "200px", backgroundColor: "#61B15A" }}
            variant="contained"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to cancel transaction?",
                type: "warning",
                btndanger: false,
                action: deliver,
              });
            }}
          >
            Delivered
          </Button>
          <Button
            sx={{ width: "200px", backgroundColor: "#2C786C" }}
            variant="contained"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to cancel transaction?",
                type: "warning",
                btndanger: false,
                action: remarks,
              });
            }}
          >
            Remarks
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default ManageItems;
