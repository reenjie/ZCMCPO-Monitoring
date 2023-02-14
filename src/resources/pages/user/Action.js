import React from "react";
import "../../../assets/css/action.css";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import Main from "../layouts/navs/Main";
import { Button, Grid, Stack, Typography, Container } from "@mui/material";
const Action = () => {
  const data = [
    { info: "PONumber:", cat: "A" },
    { info: "Supplier:", cat: "A" },
    { info: "Category:", cat: "A" },
    { info: "PONumber:", cat: "B" },
    { info: "PONumber:", cat: "B" },
    { info: "PONumber:", cat: "B" },
    { info: "PONumberaaa:", cat: "A" },
  ];

  console.log(data);
  return (
    <div>
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <Typography sx={{ fontSize: 35, p: 2 }}> Manage Items</Typography>

        <Grid container xl={12}>
          <Grid item xl={8} sx={{ px: 5, py: 2 }}>
            <Container>
              <Grid container xl={12}>
                {data.map((row) => {
                  return (
                    <Grid item xl={6}>
                      {row.info}
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </Grid>
          <Grid item xl={4} sx={{ p: 4 }}>
            <Stack spacing={3}>
              <Button variant="contained" color="success" sx={{ width: 200 }}>
                Delivered
              </Button>
              <Button variant="contained" sx={{ width: 200 }}>
                Extended
              </Button>
              <Button variant="contained" color="warning" sx={{ width: 200 }}>
                Undelivered
              </Button>
              <Button variant="contained" color="error" sx={{ width: 200 }}>
                Cancelled
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Main>
    </div>
  );
};

export default Action;
