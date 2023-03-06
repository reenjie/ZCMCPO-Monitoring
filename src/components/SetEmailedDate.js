import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { SetEmailed } from "../app/controllers/request/UserRequest";
import { LoadingButton } from "@mui/lab";
import { notify } from "./Sweetalert";
export const SetEmailedDate = ({ id, handleClose, setRefresh, Terms }) => {
  const [em, setEm] = useState();
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const handleclick = async () => {
    setLoad(true);
    const save = async () => {
      const deliveryTerms = Terms.match(/\d+/g)[0];
      /* TO DO , 
        Add Due Date added days with delivery terms. 
      */
      //   const req = await SetEmailed({
      //     emDate: em,
      //     id: id,
      //   });

      //   if (req.status === 200) {
      //     notify({
      //       type: "success",
      //       title: "Emailed Date Set!",
      //       message: "Emailed Date Set Successfully!",
      //     });
      //     setLoad(false);
      //     setRefresh(true);
      //     handleClose(false);
      //   }
    };
    if (em) {
      save();
    } else {
      setError(true);
      setLoad(false);
    }
  };
  return (
    <div style={{ width: "400px", height: "auto" }}>
      <h4>Set Emailed Date</h4>
      <div style={{ marginBottom: "20px" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          type={"date"}
          error={error}
          style={{ marginBottom: "5px" }}
          onChange={(e) => {
            setEm(e.target.value);
            setError(false);
          }}
        />

        {error && (
          <span style={{ color: "#F16767", fontSize: "12px" }}>
            Please provide a Date
          </span>
        )}
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
            setEm("");
            setError(false);
          }}
          size="small"
        >
          Close
        </Button>
        <LoadingButton
          sx={{ marginLeft: "5px" }}
          onClick={handleclick}
          variant="contained"
          size="small"
          loading={load}
        >
          Save Changes
        </LoadingButton>
      </div>
    </div>
  );
};
