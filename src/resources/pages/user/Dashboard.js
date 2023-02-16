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
            <SummaryTable usertype={usertype} />
          </Container>
        </div>
      </Main>
    </div>
  );
}

export default Dashboard;
