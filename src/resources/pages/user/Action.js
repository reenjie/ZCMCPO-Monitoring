import React from "react";
import "../../../assets/css/action.css";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import Main from "../layouts/navs/Main";
import {
  Container,
  Button,
  Grid,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
const Action = () => {
  const delivered = () => {};
  return (
    <>
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <Grid
          container
          xl={12}
          lg={12}
          xs={12}
          display="flex"
          justifyContent={"center"}
        >
          <Grid item>
            <div className="action-card">
              <Typography
                sx={{
                  flex: "1 1 100%",

                  fontWeight: 700,
                  color: "#379237",
                  fontSize: 20,
                  py: 1,
                  textAlign: "center",
                }}
                variant="h5"
                id="tableTitle"
                component="div"
              >
                {" "}
                Item Specifications
              </Typography>{" "}
              <Typography sx={{ fontSize: 12 }}>PO Number:</Typography>
              <Typography sx={{ fontSize: 12 }}>Supplier:</Typography>
              <Typography sx={{ fontSize: 12 }}>Item Description:</Typography>
              <Typography sx={{ fontSize: 12 }}>Brand:</Typography>
              <Typography sx={{ fontSize: 12 }}>Model:</Typography>
              <Typography sx={{ fontSize: 12 }}>Unit:</Typography>
              <Typography sx={{ fontSize: 12 }}>PO Date:</Typography>
              <Typography sx={{ fontSize: 12 }}>Emailed Date:</Typography>
              <Typography sx={{ fontSize: 12 }}>Delivery Term:</Typography>
              <Typography sx={{ fontSize: 12 }}>Due Date 1:</Typography>
              <Typography sx={{ fontSize: 12 }}>Due Date:</Typography>
              <Typography sx={{ fontSize: 12 }}>Delivered Date:</Typography>
              <Typography sx={{ fontSize: 12 }}>Completed Date:</Typography>
              <Typography sx={{ fontSize: 12 }}>Delay:</Typography>
              <Typography sx={{ fontSize: 12 }}>Price:</Typography>
              <Typography sx={{ fontSize: 12 }}>Quantity Order:</Typography>
              <Typography sx={{ fontSize: 12 }}>Quantity Delivered:</Typography>
              <Typography sx={{ fontSize: 12 }}>Undelivered Items:</Typography>
              <Typography sx={{ fontSize: 12 }}>Delivery Status:</Typography>
              <Typography sx={{ fontSize: 12 }}>Remarks:</Typography>
              <Divider orientation="vertical" flexItem />
            </div>
          </Grid>
          <Grid item>
            {" "}
            <div className="action-card1">
              {" "}
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: 150, height: 30 }}
                  onClick={delivered}
                >
                  Delivered
                </Button>
                <Button variant="contained" sx={{ width: 150, height: 30 }}>
                  Extended
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: 150, height: 30 }}
                >
                  Undelivered
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: 150, height: 30 }}
                >
                  Cancelled
                </Button>
              </Stack>
            </div>
          </Grid>
        </Grid>
      </Main>
    </>
  );
};

export default Action;
