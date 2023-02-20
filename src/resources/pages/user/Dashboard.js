import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
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

  console.log(data);

  const columns = [
    {
      id: "status_",
      label: "Status",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "PONo",
      label: "P.O Number",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "supplier",
      label: "Suppliers",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "description",
      label: "Description",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "category",
      label: "Category",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "unit",
      label: "Units",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "action",
      label: "Action",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  // function createData(dataid, name, username, email, role, created) {
  //   const density = population / size;
  //   return { dataid, name, username, email, role, created };
  // }

  //const rows = [createData("India", "IN", 1324171354, 3287263, 51715)];
  const rows = [data];

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
