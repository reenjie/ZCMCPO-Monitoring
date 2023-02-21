import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Edit, Delete } from "./Action";
import { ButtonGroup, Button } from "@mui/material";
import { useAuth } from "../app/hooks/ContextHooks";
import { Badge } from "@mui/icons-material";
import { Box } from "@mui/material";
import Search from "./Search";
import "../assets/css/admin.css";
import notfound from "../assets/image/notfound.svg";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import EnhancedTable from "./UserTable";
import { EnhancedTableToolbar } from "./EnhancedTableToolbar";

export default function CustomPaginationActionsTable({
  columns,
  rows,
  tabletype,
  setFetch,
  setopenModal,
  openModal,
  roles,
  supplier,
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

  // const contentSearch = rows[0]
  //   ? rows[0].data.filter((filter) =>
  //       filter.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   : [];

  const contentSearch =
    tabletype == "dashboard"
      ? rows[0]
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
          />
        </Box>
      ) : (
        <Search setSearch={setSearch} search={search} />
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
                              {column.id == "action" ? (
                                <>
                                  <Button
                                    variant="contained"
                                    size="small"
                                    color="info"
                                  >
                                    View
                                  </Button>
                                </>
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
              <>
                <h5 style={{ padding: "20px" }}>No Data Found!</h5>
              </>
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
