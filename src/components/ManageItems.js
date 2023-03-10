import React, { useState } from "react";
import { Typography, Stack, Button } from "@mui/material";
import { question } from "../components/Sweetalert";
import { LoadingButton } from "@mui/lab";
import BasicModal from "./Modal";
import { FaCogs } from "react-icons/fa";
function ManageItems({
  id,
  cancel,
  undeliver,
  extend,
  deliver,
  remarks,
  trans,
  load,
  setLoad,
  setRefresh,
  Terms,
  UndoActions,
}) {
  const {
    extendedCount,
    duration_date,
    emailed_date,
    received_date,
    delivered_date,
    completed_date,
    cancelled_date,
    DueDate,
    DueDate1,
    status,
  } = trans.filter((x) => x.FK_PoID == id)[0];
  const [loader, setLoader] = useState();
  const handleCancel = () => {
    cancel(id);
    setLoad(true);
    setLoader("cancel");
  };
  console.log(id);
  const handleUndeliver = () => {
    undeliver(id);
    setLoad(true);
    setLoader("undeliver");
  };
  const handleextend = () => {
    extend(id, Terms, duration_date, extendedCount);
    setLoad(true);
    setLoader("extend");
  };
  const handleDeliver = () => {
    deliver(id);
    setLoad(true);
    setLoader("deliver");
  };

  const undo = () => {
    UndoActions(id);
  };

  const [openModal, setopenModal] = useState(false);

  return (
    <div>
      <div className="" style={{ padding: 100 }}>
        <Typography
          sx={{
            fontSize: 16,
            textTransform: "uppercase",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Action <FaCogs style={{ fontSize: "18px" }} />
        </Typography>
        <Stack spacing={1.5}>
          <BasicModal
            openModal={openModal}
            setopenModal={setopenModal}
            Modalbtn={
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setopenModal(true);
                  }}
                  fullWidth
                  disabled={emailed_date == null ? false : true}
                >
                  <div style={{ display: "flex" }}>
                    <h5>Set Emailed Date</h5>
                  </div>
                </Button>
              </>
            }
            ModalContent={[
              {
                typeofcontent: "SetEmailedDate",
                data: id,
              },
            ]}
            setRefresh={setRefresh}
            Terms={Terms}
          />

          <LoadingButton
            variant="contained"
            color="success"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to cancel transaction?",
                type: "warning",
                btndanger: false,
                action: handleDeliver,
              });
            }}
            disabled={
              status == 2
                ? true
                : emailed_date == null
                ? true
                : delivered_date == null
                ? false
                : true
            }
            loading={loader == "deliver" ? load : false}
          >
            <div style={{ display: "flex" }}>
              <h5>Mark as Delivered</h5>
            </div>
          </LoadingButton>

          <LoadingButton
            variant="contained"
            color="error"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to cancel transaction?",
                type: "warning",
                btndanger: false,
                action: handleUndeliver,
              });
            }}
            disabled={
              status == 1
                ? true
                : emailed_date == null
                ? true
                : delivered_date == null
                ? false
                : true
            }
            loading={loader == "undeliver" ? load : false}
          >
            <div style={{ display: "flex" }}>
              <h5>Mark as Undelivered</h5>
            </div>
          </LoadingButton>

          <LoadingButton
            variant="contained"
            color="warning"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to Extend the Due Date?",
                type: "warning",
                btndanger: false,
                action: handleextend,
              });
            }}
            loading={loader == "extend" ? load : false}
            disabled={
              emailed_date == null
                ? true
                : delivered_date == null
                ? false
                : true
            }
          >
            <div style={{ display: "flex" }}>
              <h5>Extend</h5>
            </div>
          </LoadingButton>
          <LoadingButton
            variant="contained"
            color="error"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "to cancel this transaction?",
                type: "warning",
                btndanger: true,
                action: handleCancel,
              });
            }}
            disabled={
              status == 3
                ? true
                : emailed_date == null
                ? true
                : delivered_date == null
                ? false
                : true
            }
            loading={loader == "cancel" ? load : false}
          >
            <div style={{ display: "flex" }}>
              <h5>Mark as Cancelled</h5>
            </div>
          </LoadingButton>

          <Button
            variant="contained"
            color="info"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to cancel transaction?",
                type: "warning",
                btndanger: false,
                // action: remarks,
              });
            }}
          >
            <div style={{ display: "flex" }}>
              <h5>Create Remarks</h5>
            </div>
          </Button>

          {delivered_date != null && (
            <>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  question({
                    title: "Are you sure",
                    message: "you want to cancel transaction?",
                    type: "warning",
                    btndanger: false,
                    // action: remarks,
                  });
                }}
              >
                <div style={{ display: "flex" }}>
                  <h5>Mark as Completed</h5>
                </div>
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  question({
                    title: "Are you sure",
                    message: "you want to redo actions?",
                    type: "warning",
                    btndanger: false,
                    action: undo,
                  });
                }}
              >
                <div style={{ display: "flex" }}>
                  <h5>Undo </h5>
                </div>
              </Button>
            </>
          )}
        </Stack>
      </div>
    </div>
  );
}

export default ManageItems;
