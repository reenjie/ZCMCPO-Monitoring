import React, { useState } from "react";
import { TableCell, Checkbox, Tooltip, Button } from "@mui/material";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router";
import { SetViewed } from "../app/controllers/request/UserRequest";
import { LoadingButton } from "@mui/lab";
import { Authorize_Personnel, manage } from "../app/controllers/Authorize";
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
  const [load, setLoad] = useState(false);
  const viewed = async () => {
    setLoad(true);
    const selected = [
      {
        id: row.PK_posID,
        data: [row],
      },
    ];
    const result = await SetViewed({
      selection: selected,
    });
    if (result.status == 200) {
      navigate(manage(), { state: selected });
    }
  };

  return (
    <TableCell key={columnid} align={columnalign}>
      <h4 style={{ fontWeight: "normal" }}>
        {columnid == "PK_posID" ? (
          <>
            {Authorize_Personnel() && (
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
            )}
          </>
        ) : columnid == "status_" ? (
          <></>
        ) : columnid == "action" ? (
          <>
            {Authorize_Personnel() ? (
              <Tooltip title="View">
                <LoadingButton
                  variant="text"
                  size="small"
                  loading={load}
                  color="info"
                  onClick={viewed}
                >
                  <MdOutlineRemoveRedEye style={{ fontSize: "18px" }} />
                </LoadingButton>
              </Tooltip>
            ) : (
              <h6 style={{ color: "grey" }}>No action Required</h6>
            )}
          </>
        ) : columnid == "PONo" ? (
          <div>
            {row.newtag == 1 ? (
              /* badge success */
              <div
                className="CustomBadge success"
                style={{ marginRight: "5px" }}
              >
                New
              </div>
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
      </h4>
    </TableCell>
  );
};

/* FVLDp6&m */
