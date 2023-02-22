import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Edit, Delete } from "./Action";
import { ButtonGroup, Button, Badge as Count } from "@mui/material";
import { useAuth } from "../app/hooks/ContextHooks";
import { Badge } from "@mui/icons-material";
import { MdOutlineClear, MdOutlineRemoveRedEye } from "react-icons/md";

import {
  Box,
  IconButton,
  Tabs,
  FormControlLabel,
  Checkbox,
  Tooltip,
} from "@mui/material";
import "../assets/css/dashboard.css";
import Search from "./Search";
import "../assets/css/admin.css";
import notfound from "../assets/image/notfound.svg";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import EnhancedTable from "./UserTable";
import { EnhancedTableToolbar } from "./EnhancedTableToolbar";
import notf from "../assets/image/notfound.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import MailIcon from "@mui/icons-material/Mail";
export default function CustomPaginationActionsTable({
  columns,
  rows,
  tabletype,
  setFetch,
  setopenModal,
  openModal,
  roles,
  supplier,
  handleSelection,
  setSelection,
  selection,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = React.useState([]);
  const { Auth } = useAuth();
  const [opendrawer, setOpendrawer] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const contentSearch =
    tabletype == "dashboard"
      ? [rows[0]]
        ? search
          ? rows[0].filter((x) => x.PONo == search)
          : rows[0]
        : rows[0]
      : rows[0]
      ? rows[0].data.filter((filter) =>
          filter.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {tabletype == "dashboard" ? (
        <Box p={3}>
          <EnhancedTableToolbar
            opendrawer={opendrawer}
            setOpendrawer={setOpendrawer}
            numSelected={selected.length}
            setSearch={setSearch}
            search={search}
            rows={rows}
            contentSearch={contentSearch}
          />
        </Box>
      ) : (
        <Search setSearch={setSearch} search={search} />
      )}

      {selection.length >= 1 && (
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
      )}
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contentSearch.length >= 1 ? (
              contentSearch
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <>
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];

                          return tabletype == "dashboard" ? (
                            <TableCell key={column.id} align={column.align}>
                              {column.id == "PK_posID" ? (
                                <Checkbox
                                  value={value}
                                  checked={
                                    selection.length >= 1
                                      ? selection.filter((x) => x.id == value)
                                          .length >= 1
                                        ? true
                                        : false
                                      : false
                                  }
                                  onChange={handleSelection}
                                />
                              ) : column.id == "status_" ? (
                                <></>
                              ) : column.id == "action" ? (
                                <>
                                  <Tooltip title="View">
                                    <Button
                                      variant="text"
                                      size="small"
                                      color="info"
                                      onClick={() => {
                                        console.log("aww");
                                      }}
                                    >
                                      <MdOutlineRemoveRedEye
                                        style={{ fontSize: "18px" }}
                                      />
                                    </Button>
                                  </Tooltip>
                                </>
                              ) : column.id == "PONo" ? (
                                <div>
                                  {row.batch > 1 ? (
                                    row.newtag == 1 ? (
                                      <div
                                        className="badge success"
                                        style={{ marginRight: "5px" }}
                                      >
                                        New
                                      </div>
                                    ) : (
                                      ""
                                    )
                                  ) : (
                                    ""
                                  )}

                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      color: "#F16767",
                                    }}
                                  >
                                    {" "}
                                    {value}
                                  </span>
                                </div>
                              ) : (
                                value
                              )}
                            </TableCell>
                          ) : (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number" ? (
                                column.format(value)
                              ) : column.id == "action" ? (
                                <>
                                  {Auth.user.id == row.dataid ? (
                                    <Box textAlign={"center"}>
                                      <Badge
                                        color="secondary"
                                        badgeContent={0}
                                        showZero
                                      >
                                        ass
                                      </Badge>
                                    </Box>
                                  ) : (
                                    <Box textAlign={"center"}>
                                      <ButtonGroup
                                        variant="text"
                                        aria-label="text button group"
                                      >
                                        <Edit
                                          data={row}
                                          tabletype={tabletype}
                                          setFetch={setFetch}
                                          roles={roles}
                                        />
                                        <Delete
                                          data={row}
                                          tabletype={tabletype}
                                          setFetch={setFetch}
                                        />
                                      </ButtonGroup>
                                    </Box>
                                  )}
                                </>
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    </>
                  );
                })
            ) : (
              <TableRow>
                <TableCell
                  style={{ textAlign: "center" }}
                  colSpan={columns.length}
                >
                  <img src={notf} className="notfound" />
                  <h3>NO DATA FOUND</h3>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50, 100]}
        component="div"
        count={contentSearch.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
