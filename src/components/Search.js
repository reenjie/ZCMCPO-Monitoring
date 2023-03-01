import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Badge, Button } from "@mui/material";
import { CiEraser, CiSquarePlus } from "react-icons/ci";
import "../assets/css/dashboard.css";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { LoadingButton } from "@mui/lab";
import swal from "sweetalert";
import { SetViewed } from "../app/controllers/request/UserRequest";
export default function Search({
  search,
  setSearch,
  rows,
  contentSearch = [],
  setscuFilter,
  setSort,
  selection,
  scuFilter,
  setRecentfilter,
  setRecent,
  closedrawer,
  recentfilter,
}) {
  const [autoinfo, setAutoinfo] = useState("");
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  /* Create New array from existing Array */
  const data = rows
    ? rows[0].map((row, keys) => {
        return {
          key: row.PK_posID,
          id: row.PK_posID,
          label: keys + 1 + " | PO#" + row.PONo + " | " + row.supplier,
          ponumber: row.PONo,
        };
      })
    : [];

  const selectall = async () => {
    const selected = contentSearch().map((x) => {
      return {
        id: x.PK_posID,
        data: [x],
      };
    });
    if (selected.length <= 100) {
      setLoad(true);
      const result = await SetViewed({
        selection: selected,
      });
      if (result.status == 200) {
        navigate("/manage", { state: selected });
      }
    } else {
      swal({
        title: "Error Selection",
        text: "A Maximum of 100 items only is allowed",
        icon: "error",
      });
    }
  };

  return (
    <div style={{ display: "inline-block" }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        value={autoinfo}
        options={data}
        disableClearable
        size={"small"}
        onChange={(event, newValue) => {
          setSearch(newValue.ponumber);
          setAutoinfo(newValue.label);
          setSort([]);
        }}
        sx={{ width: 700, pt: 3, mb: 1 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for PO Number"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        )}
      />

      <div style={{ float: "right" }}>
        <Button
          variant="text"
          size="medium"
          color="info"
          style={{ marginRight: "7px", marginBottom: "5px" }}
          onClick={() => {
            setSearch("");
            setAutoinfo("");
            setscuFilter(false);
            setSort([]);
            setRecentfilter(false);
          }}
        >
          Clear Search{" "}
          <CiEraser
            style={{ marginLeft: "5px", fontSize: "18px", fontWeight: "Bold" }}
          />
        </Button>
        <Badge
          badgeContent={contentSearch().length}
          overlap="rectangular"
          color="error"
          max={contentSearch().length}
        >
          <LoadingButton
            variant={
              search
                ? contentSearch().length >= 1
                  ? "contained"
                  : "text"
                : scuFilter
                ? "contained"
                : recentfilter
                ? "contained"
                : "text"
            }
            size="medium"
            className="secondary"
            color={
              search
                ? contentSearch().length >= 1
                  ? "primary"
                  : "warning"
                : scuFilter
                ? "primary"
                : recentfilter
                ? "primary"
                : "warning"
            }
            sx={
              search
                ? contentSearch().length >= 1
                  ? { cursor: "pointer" }
                  : { color: "gray" }
                : scuFilter
                ? { color: "white" }
                : recentfilter
                ? { color: "white" }
                : { color: "gray" }
            }
            disabled={
              search
                ? contentSearch().length >= 1
                  ? false
                  : true
                : scuFilter
                ? false
                : recentfilter
                ? false
                : true
            }
            style={{ marginRight: "5px", marginBottom: "5px" }}
            loading={load}
            onClick={selectall}
          >
            Select All
            <CiSquarePlus
              style={{
                marginLeft: "5px",
                fontSize: "18px",
                fontWeight: "Bold",
              }}
            />
          </LoadingButton>
        </Badge>
      </div>
    </div>
  );
}
