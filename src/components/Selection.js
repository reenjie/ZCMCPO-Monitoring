import React from "react";
import { Button, Badge as Count } from "@mui/material";
import { MdOutlineClear } from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Selection = ({ setSelection, selection }) => {
  const navigate = useNavigate();
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
        <Button
          size="small"
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            console.log(selection);
            proceed();
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
        </Button>
      </Count>
    </div>
  );
};
