import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useAuth } from "../app/hooks/ContextHooks";
import { Badge } from "@mui/icons-material";
import { TableCellAccount } from "./TableCellAccount";
import {
  FetchAdvanceSortSCU,
  filterRecent,
} from "../app/controllers/request/UserRequest";
import { TableCellUser } from "./TableCellUser";
import { Selection } from "./Selection";
import { Box, Chip, TextField, Button } from "@mui/material";
import "../assets/css/admin.css";

import React, { useEffect, useState } from "react";

import { EnhancedTableToolbar } from "./EnhancedTableToolbar";
import notf from "../assets/image/notfound.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RotatingLines } from "react-loader-spinner";
import "../assets/css/dashboard.css";
import { VscClearAll } from "react-icons/vsc";
import moment from "moment/moment";

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
  selection = [],
  setColumnChoice,
  columnchoice,
  recent,
  recentfilter,
  setRecent,
  setRecentfilter,
  emailed,
  setEmailed,
  delivered,
  setDelivered,
  completed,
  setCompleted,
  due,
  setDue,
  cardShow,
  setCardShow,
  cardCont,
  setCardcont,
  borderC,
  setBorderC,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = React.useState([]);
  const { Auth } = useAuth();
  const [opendrawer, setOpendrawer] = useState(false);
  const [sort, setSort] = useState([]);
  const [scuFilter, setscuFilter] = useState(false);
  const [SCUData, setSCUdata] = useState([]);
  const [loaderf, setLoaderf] = useState(false);
  const maxDate = new Date().toISOString().split("T")[0];

  const [loadrecent, setLoadrecent] = useState([]);
  const [lrecenttoggle, setlrecenttoggle] = useState(false);
  const [sel, setSel] = useState();

  const filter = async () => {
    const result = await FetchAdvanceSortSCU({
      data: sort,
    });
    setSCUdata(result.data.data);
  };
  useEffect(() => {
    filter();
    loadsearch();
  }, [sort]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const Bolderized = (value) => {
    if (sort.length >= 1) {
      return sort.filter((x) => x.value == value).length >= 1 ? (
        <span style={{ fontWeight: "bold", color: "#537FE7" }}>{value}</span>
      ) : (
        value
      );
    } else {
      return value;
    }
  };
  const loadsearch = () => {
    setLoaderf(false);
    setTimeout(() => {
      setLoaderf(true);
    }, 3000);
  };

  const contentSearch = () => {
    if (tabletype == "dashboard") {
      if (rows[0]) {
        if (search) {
          setCardShow(false);
          setRecentfilter(false);
          return rows[0].filter((x) => x.PONo == search);
        }

        if (scuFilter) {
          setRecentfilter(false);
          setCardShow(false);
          return SCUData;
        }

        if (recentfilter) {
          setCardShow(false);

          return lrecenttoggle ? loadrecent : recent;
        }

        if (cardShow) {
          return cardCont;
        }

        return rows[0];
      }
    } else if (tabletype == "auditlogs") {
      return rows;
    } else {
      return rows;
    }
  };
  const cardborder = () => {
    return cardShow ? `20px solid ${borderC}` : "transparent";
  };

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderLeft: cardborder(),
        transition: "all ease-in-out 0.4s",
      }}
    >
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
            sort={sort}
            setSort={setSort}
            setscuFilter={setscuFilter}
            scuFilter={scuFilter}
            setSelection={setSelection}
            setColumnChoice={setColumnChoice}
            columnchoice={columnchoice}
            selection={selection}
            setRecent={setRecent}
            setRecentfilter={setRecentfilter}
            recentfilter={recentfilter}
            emailed={emailed}
            setEmailed={setEmailed}
            delivered={delivered}
            setDelivered={setDelivered}
            completed={completed}
            setCompleted={setCompleted}
            due={due}
            setDue={setDue}
            setCardShow={setCardShow}
            setBorderC={setBorderC}
            cardShow={cardShow}
            Auth={Auth}
          />
        </Box>
      ) : (
        ""
      )}

      {scuFilter
        ? sort.length >= 1 && (
            <Box p={5}>
              <h5 style={{ marginBottom: "4px" }}>Filter By :</h5>

              {sort.map((row) => {
                return (
                  <Chip
                    color="info"
                    variant="outlined"
                    label={`${row.labelled} : ${row.value}`}
                    onClick={() => {
                      setOpendrawer(true);
                    }}
                    onDelete={() => {
                      const newSet = sort.filter(
                        (x) => x.labelled != row.labelled
                      );
                      setSort(newSet);
                      if (newSet.length == 0) {
                        setscuFilter(false);
                      }
                    }}
                  />
                );
              })}
            </Box>
          )
        : ""}

      {recentfilter && (
        <Box p={4}>
          <h5>Filtered By </h5>

          <span
            style={{ fontSize: "17px", fontWeight: "bold", color: "#F16767" }}
          >
            RECENT TRANSACTIONS{" "}
            <span style={{ marginTop: "5px" }}>
              <AiOutlineClockCircle />
            </span>
          </span>
          <Box>
            <h5>Select-Date</h5>
            <div style={{ display: "flex" }}>
              <TextField
                type={"date"}
                size="small"
                inputProps={{
                  max: maxDate,
                }}
                onChange={async (e) => {
                  setSel(e.currentTarget.value);
                  const filterDate = {
                    filterDate: e.currentTarget.value,
                  };
                  //filterRecent
                  const req = await filterRecent({
                    data: filterDate,
                  });

                  setLoadrecent(req.data.data);
                  setlrecenttoggle(true);
                }}
                value={sel}
              ></TextField>

              <Button
                onClick={() => {
                  setlrecenttoggle(false);
                  setSel("");
                }}
                color="error"
                variant="contained"
                size="small"
              >
                Clear Filter <VscClearAll style={{ fontSize: "20px" }} />
              </Button>
            </div>
          </Box>
        </Box>
      )}
      {selection.length >= 1 && (
        <Selection selection={selection} setSelection={setSelection} />
      )}
      <TableContainer
        sx={{ maxHeight: 640, transition: "all ease-in-out 0.4s" }}
      >
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
            {contentSearch().length >= 1 ? (
              contentSearch()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <>
                      {tabletype == "auditlogs" ? (
                        <>
                          {row.map((x) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = x[column.id];
                                  return (
                                    <TableCell
                                      align="center"
                                      style={{ fontSize: "13px" }}
                                    >
                                      {column.id == "created_at"
                                        ? moment(value).format(
                                            " h:mm:ssa MMMM Do YYYY"
                                          )
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                        </>
                      ) : tabletype == "accounts" ? (
                        <>
                          {row.map((x) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = x[column.id];
                                  return (
                                    <TableCellAccount
                                      column={column}
                                      columnid={column.id}
                                      columnalign={column.align}
                                      columnformat={column.format}
                                      value={value}
                                      tabletype={tabletype}
                                      setFetch={setFetch}
                                      roles={roles}
                                      row={x}
                                      dataid={x.dataid}
                                      Authuserid={Auth.user.id}
                                    />
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                        </>
                      ) : (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];

                            return (
                              tabletype == "dashboard" && (
                                /* All Dashboard */
                                <TableCellUser
                                  columnid={column.id}
                                  columnalign={column.align}
                                  value={value}
                                  selection={selection}
                                  handleSelection={handleSelection}
                                  row={row}
                                  Bolderized={Bolderized}
                                />
                              )
                            );
                          })}
                        </TableRow>
                      )}
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
                  <h3>
                    {loaderf ? (
                      "No Data Found"
                    ) : (
                      <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="40"
                        visible={true}
                      />
                    )}
                  </h3>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50, 100]}
        component="div"
        count={contentSearch().length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
