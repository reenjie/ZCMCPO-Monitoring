import { Grid, Button } from "@mui/material";
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
  const [selection, setSelection] = useState([]);
  const fetch = async () => {
    const res = await FetchPurchaseOrder();

    setData(res.data.data);
  };
  useEffect(() => {
    fetch();
  }, []);

  const columns = [
    {
      id: "PK_posID",
      label: "",
      minWidth: 50,
      format: (value) => value.toLocaleString("en-US"),
    },
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

  const handleSelection = (e) => {
    const id = e.target.value;
    const row = data.filter((x) => x.PK_posID == id);

    if (selection.length >= 1) {
      for (let { id: Rowid } of selection) {
        if (id === Rowid) {
          const newSet = selection.filter((x) => x.id != id);
          setSelection(newSet);
          return;
        }
      }
      setSelection([
        ...selection,
        {
          id: id,
          data: row,
        },
      ]);
      return;
    } else {
      setSelection([
        {
          id: id,
          data: row,
        },
      ]);
      return;
    }
  };

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
          <Container maxWidth="xxl">
            <Status />
          </Container>

          <Container maxWidth="xxl" sx={{ py: 5 }}>
            <CustomPaginationActionsTable
              tabletype="dashboard"
              columns={columns}
              rows={rows}
              supplier={supplier}
              handleSelection={handleSelection}
              setSelection={setSelection}
              selection={selection}
            />
          </Container>
        </div>
      </Main>
    </div>
  );
}

export default Dashboard;
