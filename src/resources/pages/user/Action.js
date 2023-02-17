import React from "react";
import "../../../assets/css/action.css";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import Main from "../layouts/navs/Main";
import {
  Button,
  Grid,
  Stack,
  Typography,
  Container,
  Divider,
} from "@mui/material";
const Action = () => {
  const delivered = () => {};
  return (
    <div className="action">
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <div className="action-card">
          <Typography
            sx={{
              flex: "1 1 100%",
              fontStyle: "Roboto",
              fontWeight: 700,
              color: "#379237",
              fontSize: 30,
              p: 3,
            }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {" "}
            Manage Items
          </Typography>

          <Grid container xl={12}>
            <Grid item xl={8} sx={{ px: 5, py: 2 }}>
              <Grid container xl={12}>
                <Grid item xl={6}>
                  <Typography sx={{ fontSize: 15, p: 1 }}>
                    PO Number:
                  </Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>Supplier:</Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>
                    Item Description:
                  </Typography>

                  <Typography sx={{ fontSize: 15, p: 1 }}>Brand:</Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>Model:</Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>Unit:</Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>PO Date:</Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>
                    Emailed Date:
                  </Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>
                    Delivery Term:
                  </Typography>
                  <Typography sx={{ fontSize: 15, fontWeight: 600, p: 1 }}>
                    Due Date 1:
                  </Typography>
                </Grid>

                <Grid item xl={6}>
                  <Typography sx={{ fontSize: 15, p: 1 }}>Due Date:</Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>
                    Delivered Date:
                  </Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>
                    Completed Date:
                  </Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>Delay:</Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>Price:</Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>
                    Quantity Order:
                  </Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>
                    Quantity Delivered:
                  </Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>
                    Undelivered Items:
                  </Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>
                    Delivery Status:
                  </Typography>
                  <Typography sx={{ fontSize: 15, p: 1 }}>Remarks:</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              display="flex"
              justifyContent="center"
              item
              xl={3}
              sx={{ px: 5 }}
            >
              <Stack spacing={3}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ width: 200, height: 40 }}
                  onClick={delivered}
                >
                  Delivered
                </Button>
                <Button variant="contained" sx={{ width: 200, height: 40 }}>
                  Extended
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: 200, height: 40 }}
                >
                  Undelivered
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: 200, height: 40 }}
                >
                  Cancelled
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Main>
    </div>
  );
};

export default Action;
