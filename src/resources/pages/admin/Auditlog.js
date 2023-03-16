import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { AdminSidebar, Supervisorsidebar } from "../../../data/NavData";
import Main from "../layouts/navs/Main";
import { Grid, Paper, TextField, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomPaginationActionsTable from "../../../components/Table";
import { fetchlogs } from "../../../app/controllers/auth/AuthController";
import { MdCancel } from "react-icons/md";
import SupervisorLayout from "../layouts/SupervisorLayout";
export const Auditlog = ({ usertype }) => {
  const thisday = new Date();
  const isoString = thisday.toISOString();
  const todaydate = isoString.substring(0, 10);
  const [data, setdata] = useState([]);
  const [searchdata, setSearchData] = useState("");
  const [searchdate, setsearchDate] = useState();

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

  const filtered =
    searchdata && searchdate
      ? data.filter(
          (x) =>
            x.username.toLowerCase().includes(searchdata.toLowerCase()) &&
            x.created_at.toLowerCase().includes(searchdate.toLowerCase())
        )
      : searchdata
      ? data.filter((x) =>
          x.username.toLowerCase().includes(searchdata.toLowerCase())
        )
      : searchdate
      ? data.filter((x) =>
          x.created_at.toLowerCase().includes(searchdate.toLowerCase())
        )
      : data;

  const rows = [filtered];

  return (
    <div>
      {usertype == "admin" ? (
        <AdminLayout SidebarNav={AdminSidebar} />
      ) : (
        <SupervisorLayout SidebarNav={Supervisorsidebar} />
      )}

      <Main>
        {" "}
        <Grid container spacing={2} mt={2}>
          <Grid xs={6} md={2}></Grid>
          <Grid xs={6} md={8}>
            <h3>Audit Logs</h3>

            <Grid container spacing={4} mt={2}>
              <Grid md={3}>
                <TextField
                  sx={{ marginTop: "8px" }}
                  fullWidth
                  variant="filled"
                  size="small"
                  label="Search for username.."
                  onChange={(e) => {
                    setSearchData(e.target.value);
                  }}
                  value={searchdata}
                ></TextField>
              </Grid>
              <Grid md={3} sx={{ marginLeft: "8px" }}>
                <h6>Filter By Date</h6>
                <TextField
                  fullWidth
                  type={"date"}
                  size="small"
                  onChange={(e) => {
                    setsearchDate(e.target.value);
                  }}
                  value={searchdate}
                ></TextField>
              </Grid>
              <Grid md={3} sx={{ marginLeft: "8px", marginTop: "20px" }}>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => {
                    setsearchDate("");
                    setSearchData("");
                  }}
                >
                  Clear Filter{" "}
                  <MdCancel style={{ marginLeft: "3px", fontSize: "18px" }} />
                </Button>
              </Grid>
            </Grid>

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
