import React, { useState } from "react";
import { Button, Badge as Count } from "@mui/material";
import { MdOutlineClear } from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

export const Selection = ({ setSelection, selection }) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const proceed = () => {
    navigate("/manage", { state: selection });
  };

  return (
    <div style={{ padding: "10px" }}>
      <Button
        size="small"
        variant="text"
        color="error"
        style={{ marginLeft: "20px" }}
        onClick={() => {
          setSelection([]);
        }}
      >
        {" "}
        Clear Selection{" "}
        <MdOutlineClear
          style={{ marginLeft: "3px", fontSize: "17px", marginTop: "-5px" }}
        />
      </Button>
      <Count badgeContent={selection.length} color="error">
        <LoadingButton
          size="small"
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
          loading={load}
          onClick={() => {
            setLoad(true);
            setTimeout(() => {
              proceed();
            }, 2000);
          }}
        >
          {" "}
          Proceed
          <BsFillArrowRightCircleFill
            style={{
              marginLeft: "3px",
              fontSize: "17px",
              marginTop: "-5px",
            }}
          />
        </LoadingButton>
      </Count>
    </div>
  );
};
