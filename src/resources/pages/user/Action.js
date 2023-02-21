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
import { VscOutput } from "react-icons/vsc";
import { grey } from "@mui/material/colors";
const Action = () => {
  const delivered = () => {};
  return (
    <>
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <Grid container justifyContent={"center"}>
          <div className="action-card">
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 600,
                mb: 2,
              }}
            >
              <VscOutput />
              Item Overview
              <Divider />
            </Typography>
            <Grid container>
              <Grid item xl={10}>
                <Typography sx={{ fontSize: 12, color: "green" }}>
                  {" "}
                  PO Number: 009324042
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                  Item Description:
                </Typography>
                <Typography sx={{ fontSize: 20, fontStyle: "Poppins" }}>
                  Needle Hypo G-18 x 1 1/2", disposable
                </Typography>

                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Supplier:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Brand:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Model:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Unit:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  PO Date:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Price:
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                  Prioritize Task:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Emailed Date:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Delivery Term:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Due Date 1:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Due Date:
                </Typography>

                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Delay:
                </Typography>

                <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                  Status:
                </Typography>

                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Undelivered Items:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Delivered Date:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Completed Date:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Quantity Delivered:
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#71797E" }}>
                  Remarks:
                </Typography>
              </Grid>

              <Grid item xl={2}>
                <Stack spacing={2} ml={5}>
                  {" "}
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
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Main>
    </>
  );
};

export default Action;
