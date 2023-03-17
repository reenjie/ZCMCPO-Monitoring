import React, { useEffect, useState } from "react";
import SupervisorLayout from "../layouts/SupervisorLayout";
import { Supervisorsidebar } from "../../../data/NavData";
import Main from "../layouts/navs/Main";
import { Grid } from "@mui/material";
import CustomPaginationActionsTable from "../../../components/Table";
import {
  fetchForapproval,
  GetPOstatus,
} from "../../../app/controllers/request/UserRequest";
export const Approval = () => {
  const [data, setData] = useState([]);
  const [po, setPo] = useState([]);
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const req = await fetchForapproval({});
      if (req.status == 200) {
        setData(req.data.data);
        setPo(req.data.po);
      }

      const fetchrecent = await GetPOstatus({});
      setTrans(fetchrecent.data.data);
    };
    fetch();
  }, []);

  const columns = [
    {
      id: "requestby",
      label: "Username",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "actiontypes",
      label: "Action Type | Activities",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "PONo",
      label: "PO#",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "itemdesc",
      label: "Item Description",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "action",
      label: "Action",
      minWidth: 170,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];
  const rows = [data];
  return (
    <div>
      <SupervisorLayout SidebarNav={Supervisorsidebar} />
      <Main>
        <Grid container spacing={2} mt={2}>
          <Grid xs={6} md={2}></Grid>
          <Grid xs={6} md={8}>
            <h3>For Approvals</h3>

            <CustomPaginationActionsTable
              tabletype="Approvals"
              columns={columns}
              rows={rows}
              po={po}
              trans={trans}
            />
          </Grid>
          <Grid xs={6} md={2}></Grid>
        </Grid>
      </Main>
    </div>
  );
};
