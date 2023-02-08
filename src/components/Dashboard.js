import React from "react";
import {
  Button,
  Container,
  Grid,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Icon,
} from "@mui/material";

function Dashboard() {
  const tiers = [
    {
      title: "Delivered",
      //   icon: <FcShipped />,
    },
    {
      title: "Cancelled",
    },
    {
      title: "Extended",
    },
    {
      title: "Undelivered",
    },
  ];

  return (
    <div>
      <Grid container spacing={5} alignItems="flex-end" sx={{ width: "100%" }}>
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid item key={tier.title} xs={12} md={3}>
            <Card>
              <CardHeader title={tier.title} />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                  }}
                >
                  {/* <Icon>{tier.icon}</Icon> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;
