import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Status from "./Status";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import SummaryTable from "./SummaryTable";
import Topbar from "../layouts/navs/Topbar";
import SearchItem from "./SearchItem";
import { Container } from "@mui/system";
import Main from "../layouts/navs/Main";
import AdminLayout from "../layouts/AdminLayout";
import { AdminSidebar } from "../layouts/navs/NavData";
import { FetchPurchaseOrder } from "../../../app/controllers/request/UserRequest";
import { Autocomplete, Box, TextField } from "@mui/material";

function Dashboard({ usertype }) {
  const fetch = async () => {
    const res = await FetchPurchaseOrder();

    console.log(res);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {usertype == "admin" ? (
        <AdminLayout SidebarNav={AdminSidebar} />
      ) : (
        <UserLayout SidebarNav={UserSidebar} />
      )}

      <Main>
        <div>
          <Status />
          <Container maxWidth="xxl" sx={{ py: 5 }}>
            <Grid item display={"flex"} justifyContent="left" sx={{ py: 5 }}>
              <Autocomplete
                id="country-select-demo"
                sx={{ width: 300 }}
                options={[]}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search .."
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Grid>
            <SummaryTable usertype={usertype} />
          </Container>
        </div>
      </Main>
    </div>
  );
}

export default Dashboard;
