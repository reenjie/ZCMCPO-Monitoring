import React from "react";
import BasicCard from "../../../components/Card";
import { Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
const Action = () => {
  return (
    <div>
      <Container
        display="flex"
        alignItems={"center"}
        border="black"
        sx={{ p: 5 }}
      >
        <Grid container xl={12} spacing={2}>
          <Grid item xl={8}>
            <Typography sx={{ m: 2 }}>Item Description</Typography>
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
          </Grid>
          <Grid item xl={4}>
            <BasicCard title={"Manage  Items"} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Action;
