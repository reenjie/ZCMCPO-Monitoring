import { Box, Grid, ImageList, TextField, Link } from "@mui/material";
import React from "react";
import Logo from "../assets/image/zcmc_logo.png";

function Navbar() {
  return (
    <div>
      <Grid container sx={{ width: "100%" }}>
        <Grid item xl={10} lg={10} sx={{ height: "60px", mt: 2 }}>
          <Box display="flex">
            <img src={Logo} height={60} />
            <Box
              sx={{
                height: "50px",
                fontSize: "30px",
                fontWeight: 800,
                color: "green",
                mx: 4,
                mt: 1,
              }}
            >
              ZCMC
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          underline="none"
          sx={{ height: "60px", my: 4 }}
        >
          <Link
            href="/login"
            underline="none"
            sx={{ height: "50px", mx: 3, fontSize: "25px", color: "green" }}
          >
            Login
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;
