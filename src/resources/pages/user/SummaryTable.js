import React from "react";
import { useState } from "react";
import CustomPaginationActionsTable from "../../../components/Table";
import BasicModal from "../../../components/Modal";
import { TextField, Grid, Button } from "@mui/material";

function SummaryTable() {
  const [closeModal, setCloseModal] = useState(false);

  function createData(name, code, population, size, dataid) {
    const density = population / size;
    return { name, code, population, size, density, dataid };
  }
  const columns = [
    { id: "ponum", label: "PO NUMBER", minWidth: 170 },
    {
      id: "supplier",
      label: "SUPPLIER",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "itemdesc",
      label: "ITEM DESCRIPTION",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "category",
      label: "CATEGORY",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "brand",
      label: "BRAND",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "model",
      label: "MODEL",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "unit",
      label: "UNIT",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "podate",
      label: "PO DATE",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "emaildate",
      label: "EMAILED DATE",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "delterm",
      label: "DELIVERY TERM",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "duedate1",
      label: "DUE DATE1",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "duedate",
      label: "DUE DATE",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "extend",
      label: "EXTENSION",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "delivered",
      label: "DELIVERED DATE",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "completed",
      label: "COMPLETED DATE",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "delay",
      label: "DELAY",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "price",
      label: "PRICE",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "qtyorder",
      label: "QUANTITY ORDER",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "qtydelivered",
      label: "QUANTITY DELIVERED",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "undelivereditems",
      label: "UNDELIVERED ITEMS",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "delstatus",
      label: "DELIVERY STATUS",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  const rows = [createData("India", "IN", 1324171354, 3287263, 51715)];
  const AddAccounts = () => {
    return (
      <>
        <h3 style={{ marginBottom: "10px", fontWeight: "normal" }}>
          Add Accounts
        </h3>

        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              id="filled-basic"
              size="small"
              sx={{ marginBottom: "10px" }}
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              id="filled-basic"
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Last Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              id="filled-basic"
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              id="filled-basic"
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Role"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              type={"password"}
              id="filled-basic"
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              type={"password"}
              id="filled-basic"
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Re-EnterPassword"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <div style={{ float: "right", marginTop: "10px" }}>
          <Button
            variant="contained"
            size="small"
            color="success"
            sx={{ padding: "4px 30px" }}
          >
            {" "}
            Save
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ marginLeft: "5px" }}
            onClick={() => setCloseModal(true)}
          >
            {" "}
            Close
          </Button>
        </div>
      </>
    );
  };

  return (
    <div>
      {" "}
      <BasicModal
        Modalbtn={<>Edit</>}
        ModalContent={<AddAccounts />}
        Close={closeModal}
        setClose={setCloseModal}
      />
      <CustomPaginationActionsTable columns={columns} rows={rows} />
    </div>
  );
}

export default SummaryTable;
