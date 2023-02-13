import React from "react";
import "../../../assets/css/action.css";
import { Button, Container, Grid, Stack, TextField } from "@mui/material";
const Action = () => {
  return (
    <div className="card">
      <Grid container xl={12}>
        <Grid item xl={6}>
          {" "}
          <Stack spacing={2}>
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
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
          </Stack>
        </Grid>
        <Grid item xl={5}>
          <Container>
            <Stack spacing={3}>
              <Button variant="contained" sx={{ width: "250px" }}>
                Delivered
              </Button>
              <Button variant="contained" sx={{ width: "250px" }}>
                Extended
              </Button>
              <Button variant="contained" sx={{ width: "250px" }}>
                Undelivered
              </Button>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Action;
