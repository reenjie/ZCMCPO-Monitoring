import React from "react";
import { Typography, Stack, Button } from "@mui/material";
function ManageItems() {
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
          >
            Cancelled
          </Button>
          <Button
            sx={{ width: "200px", backgroundColor: "#FF8E00" }}
            variant="contained"
          >
            Undelivered
          </Button>
          <Button
            sx={{
              width: "200px",
              backgroundColor: "#FFCC29",
            }}
            variant="contained"
          >
            Extended
          </Button>
          <Button
            sx={{ width: "200px", backgroundColor: "#61B15A" }}
            variant="contained"
          >
            Delivered
          </Button>
          <Button
            sx={{ width: "200px", backgroundColor: "#2C786C" }}
            variant="contained"
          >
            Remarks
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default ManageItems;
