import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { AdminSidebar } from "../layouts/navs/NavData";
import Main from "../layouts/navs/Main";
import { Grid, Paper, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomPaginationActionsTable from "../../../components/Table";
import { fetchlogs } from "../../../app/controllers/auth/AuthController";

export const Auditlog = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetchlogs({});

      setdata(res.data.data);
    };
    fetchDatas();
  }, []);

  const columns = [
    {
      id: "username",
      label: "Username",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "actiontype",
      label: "Action Type | Activities",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "created_at",
      label: "Date and Time",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];
  const rows = [data];

  return (
    <div>
      <AdminLayout SidebarNav={AdminSidebar} />
      <Main>
        {" "}
        <Grid container spacing={2} mt={2}>
          <Grid xs={6} md={2}></Grid>
          <Grid xs={6} md={8}>
            <h3>Audit Logs</h3>
            <CustomPaginationActionsTable
              tabletype="auditlogs"
              columns={columns}
              rows={rows}
            />
          </Grid>
          <Grid xs={6} md={2}></Grid>
        </Grid>
      </Main>
    </div>
  );
};
