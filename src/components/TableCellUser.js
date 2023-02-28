import React from "react";
import { TableCell, Checkbox, Tooltip, Button } from "@mui/material";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router";
export const TableCellUser = ({
  columnid,
  columnalign,
  value,
  selection,
  handleSelection,
  row,
  Bolderized,
}) => {
  const navigate = useNavigate();
  return (
    <TableCell key={columnid} align={columnalign}>
      {columnid == "PK_posID" ? (
        <Checkbox
          value={value}
          checked={
            selection.length >= 1
              ? selection.filter((x) => x.id == value).length >= 1
                ? true
                : false
              : false
          }
          onChange={handleSelection}
        />
      ) : columnid == "status_" ? (
        <></>
      ) : columnid == "action" ? (
        <>
          <Tooltip title="View">
            <Button
              variant="text"
              size="small"
              color="info"
              onClick={() => {
                const selected = [
                  {
                    id: row.PK_posID,
                    data: [row],
                  },
                ];
                navigate("/manage", { state: selected });
              }}
            >
              <MdOutlineRemoveRedEye style={{ fontSize: "18px" }} />
            </Button>
          </Tooltip>
        </>
      ) : columnid == "PONo" ? (
        <div>
          {row.batch > 1 ? (
            row.newtag == 1 ? (
              /* badge success */
              <div
                className="CustomBadge success"
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
        Bolderized(value)
      )}
    </TableCell>
  );
};
