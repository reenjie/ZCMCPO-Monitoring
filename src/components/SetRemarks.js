import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import {
  SetDeliveredDate,
  UpdateDue,
} from "../app/controllers/request/UserRequest";
import { LoadingButton } from "@mui/lab";
import { notify } from "./Sweetalert";
export const SetRemarks = ({ id, handleClose, setRefresh, remarks }) => {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [uncheck, setUncheck] = useState(false);
  const maxDate = new Date().toISOString().split("T")[0];
  const [manremarks, setManremarks] = useState(remarks);
  const save = async () => {
    const req = await UpdateDue({
      id: id,
      entity: "remarks",
      dates: manremarks,
    });

    if (req.status === 200) {
      setRefresh(true);
      handleClose(false);
      setLoad(false);
    }
  };
  const handleclick = async () => {
    setLoad(true);
    if (manremarks == remarks) {
      notify({
        type: "info",
        title: "No Changes has Made",
        message: "Nothing to Save.",
      });
      handleClose(false);
    } else {
      save();
    }
  };

  return (
    <div style={{ width: "500px", height: "auto" }}>
      <h4 style={{ marginBottom: "20px" }}> Remarks</h4>
      <div style={{ marginBottom: "20px" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          error={error}
          style={{ marginBottom: "5px" }}
          multiline
          rows={4}
          placeholder="Type your message here..."
          value={manremarks}
          onChange={(e) => {
            setManremarks(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            handleClose(false);
            setError(false);
          }}
          size="small"
          color="inherit"
        >
          Close
        </Button>
        <LoadingButton
          sx={{ marginLeft: "5px" }}
          variant="contained"
          color="primary"
          size="small"
          loading={load}
          onClick={handleclick}
        >
          Save remarks
        </LoadingButton>
      </div>
    </div>
  );
};
