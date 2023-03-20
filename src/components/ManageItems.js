import React, { useState } from "react";
import { Typography, Stack, Button, Box, Grid } from "@mui/material";
import { notify, question } from "../components/Sweetalert";
import { LoadingButton } from "@mui/lab";
import BasicModal from "./Modal";
import { FaCogs } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";
import { RotatingLines } from "react-loader-spinner";
function ManageItems({
  id,
  cancel,
  undeliver,
  extend,
  deliver,
  trans,
  load,
  setLoad,
  setRefresh,
  Terms,
  UndoActions,
  extendDis,
  setExtenddis,
  MarkCompleted,
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
    confirmation,
    status,
    remarks,
  } = trans.filter((x) => x.FK_PoID == id)[0];
  const [loader, setLoader] = useState();

  const handleCancel = () => {
    cancel(id);
    setLoad(true);
    setLoader("cancel");
  };

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
    if (cancelled_date) {
      UndoActions(id, "cancelled");
    } else {
      UndoActions(id, "delivered");
    }
  };

  const handleComplete = () => {
    MarkCompleted(id);
    setLoad(true);
    setLoader("completed");
  };
  const extendTerms = () => {
    const thisday = new Date();
    const isoString = thisday.toISOString();
    const todaydate = isoString.substring(0, 10);

    const TheDues = duration_date == null ? DueDate : duration_date;

    const today = new Date(todaydate);
    const due = new Date(TheDues);

    if (today > due) {
      return true;
    }

    return false;
  };

  const [openModal, setopenModal] = useState(false);
  const [openModal1, setopenModal1] = useState(false);
  const [openModal2, setopenModal2] = useState(false);

  return (
    <div className="" style={{ padding: 10, display: "flex" }}>
      <Grid container>
        <Typography
          sx={{
            fontSize: 16,
            textTransform: "uppercase",
            marginBottom: "20px",
            fontWeight: "bold",
            m: 2,
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

          <BasicModal
            openModal={openModal1}
            setopenModal={setopenModal1}
            Modalbtn={
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    setopenModal1(true);
                  }}
                  fullWidth
                  disabled={
                    status == 2
                      ? true
                      : emailed_date == null
                      ? true
                      : cancelled_date != null
                      ? true
                      : delivered_date == null
                      ? false
                      : true
                  }
                >
                  <div style={{ display: "flex" }}>
                    <h5>Mark as Delivered</h5>
                  </div>
                </Button>
              </>
            }
            ModalContent={[
              {
                typeofcontent: "markReceived",
                data: id,
              },
            ]}
            setRefresh={setRefresh}
            Terms={Terms}
          />

          <LoadingButton
            variant="contained"
            color="error"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to mark this transaction Undelivered?",
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
                : cancelled_date != null
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
              if (extendTerms()) {
                notify({
                  type: "error",
                  title: "Action Denied",
                  message: "The due date is now overdue.",
                }).then(() => {
                  //setExtenddis(true);
                });
              } else {
                question({
                  title: "Are you sure",
                  message: "you want to Extend the Due Date?",
                  type: "warning",
                  btndanger: false,
                  action: handleextend,
                });
              }
            }}
            loading={loader == "extend" ? load : false}
            disabled={
              emailed_date == null
                ? true
                : extendDis
                ? true
                : cancelled_date != null
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
        </Stack>
      </Grid>
      <Grid container>
        <Stack spacing={1.5} sx={{ mt: 7 }}>
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
              status == 3 ? true : delivered_date == null ? false : true
            }
            loading={loader == "cancel" ? load : false}
          >
            <div style={{ display: "flex" }}>
              <h5>Mark as Cancelled</h5>
            </div>
          </LoadingButton>

          <BasicModal
            openModal={openModal2}
            setopenModal={setopenModal2}
            Modalbtn={
              <>
                <Button
                  variant="contained"
                  color="info"
                  onClick={() => {
                    setopenModal2(true);
                  }}
                  fullWidth
                >
                  <div style={{ display: "flex" }}>
                    <h5>Remarks</h5>
                  </div>
                </Button>
              </>
            }
            ModalContent={[
              {
                typeofcontent: "setRemarks",
                data: id,
              },
            ]}
            setRefresh={setRefresh}
            Terms={Terms}
            remarks={remarks}
          />
          {!confirmation &&
            delivered_date != null &&
            completed_date == null && (
              <>
                <LoadingButton
                  variant="contained"
                  color="success"
                  onClick={() => {
                    question({
                      title: "Are you sure",
                      message:
                        "you want to Mark this transaction as Completed?",
                      type: "warning",
                      btndanger: false,
                      action: handleComplete,
                    });
                  }}
                  loading={loader == "completed" ? load : false}
                >
                  <div style={{ display: "flex" }}>
                    <h5>Mark as Completed</h5>
                  </div>
                </LoadingButton>
              </>
            )}

          {confirmation == 1 ? (
            <>
              <div
                style={{
                  padding: "5px",
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#DC3535",
                  alignSelf: "center",
                }}
                fullWidth
              >
                <div style={{ display: "flex" }}>
                  <h4>
                    {" "}
                    <h5> ** UNDOING ACTIONS **</h5> Waiting for Confirmation{" "}
                  </h4>
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="20"
                    visible={true}
                  />
                </div>
              </div>
            </>
          ) : delivered_date != null || cancelled_date != null ? (
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                question({
                  title: "Are you sure",
                  message:
                    "you want to redo actions? , Your request will not be granted until you receive confirmation and wait for it.",
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
          ) : (
            ""
          )}
        </Stack>
      </Grid>
    </div>
  );
}

export default ManageItems;
