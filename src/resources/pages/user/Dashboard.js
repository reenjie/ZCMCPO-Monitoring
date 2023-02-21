import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Status from "./Status";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import SummaryTable from "./SummaryTable";
import Topbar from "../layouts/navs/Topbar";
import { Container } from "@mui/system";
import Main from "../layouts/navs/Main";
import AdminLayout from "../layouts/AdminLayout";
import { AdminSidebar } from "../layouts/navs/NavData";
import { FetchPurchaseOrder } from "../../../app/controllers/request/UserRequest";
import { Autocomplete, Box, TextField } from "@mui/material";
import CustomPaginationActionsTable from "../../../components/Table";

function Dashboard({ usertype }) {
  const [data, setData] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const fetch = async () => {
    const res = await FetchPurchaseOrder();

    setData(res.data.data);
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
            <CustomPaginationActionsTable
              tabletype="dashboard"
              columns={columns}
              rows={rows}
              supplier={supplier}
            />
          </Container>
        </div>
      </Main>
    </div>
  );
}

export default Dashboard;
