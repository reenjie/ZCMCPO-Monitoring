import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ActionCheckbox from "./ActionCheckbox";
import { notify, question } from "./Sweetalert";
import { Applytoall } from "../app/controllers/request/UserRequest";
import { FaCogs } from "react-icons/fa";
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function ActionModal({
  id,
  Modalbtn,
  ModalContent,
  setFetch,
  setopenModal,
  openModal,
  selection,
  setRefresh,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selected, setSelected] = useState();
  const [remarks, setRemarks] = useState();
  const [clicked, setClicked] = useState();
  const [emd, setEmd] = useState();
  const [emd1, setEmd1] = useState();
  const [error, setError] = useState(false);

  const ApplytoAll = (f) => {
    question({
      title: "Are you sure?",
      message:
        "Changes will be saved to all items selected \n Note : All items with existing Data will be ignored.",
      type: "warning",
      btndanger: false,
      action: f,
    });
  };

  const alert = () => {
    setRefresh(true);
    setopenModal(false);
    alert();
    notify({
      type: "success",
      title: "Changes Applied",
      message: "The Selected Options have been implemented across all items",
    }).then(() => {
      setSelected();
      setError(false);
      setEmd();
      setEmd1();
      setClicked();
    });
  };

  const SaveEmail = async () => {
    const req = await Applytoall({
      data: emd,
      selection: selection,
      ttype: "saveemail",
    });

    if (req.status === 200) {
      alert();
    }
  };
  const SaveDelivered = async () => {
    const req = await Applytoall({
      data: emd1,
      selection: selection,
      ttype: "savedelivered",
    });
    if (req.status === 200) {
      alert();
    }
  };

  const SaveCancelled = async () => {
    const req = await Applytoall({
      data: "",
      selection: selection,
      ttype: "savecancelled",
    });
    if (req.status === 200) {
      alert();
    }
  };

  const SaveUndelivered = async () => {
    const req = await Applytoall({
      data: "",
      selection: selection,
      ttype: "saveundelivered",
    });
    if (req.status === 200) {
      alert();
    }
  };

  const SaveExtend = async () => {
    const req = await Applytoall({
      data: "",
      selection: selection,
      ttype: "saveExtend",
    });
    if (req.status === 200) {
      alert();
    }
  };

  const SaveRemarks = async () => {
    const req = await Applytoall({
      data: remarks,
      selection: selection,
      ttype: "saveRemarks",
    });
    if (req.status === 200) {
      alert();
    }
  };

  const SaveCompleted = async () => {
    const req = await Applytoall({
      data: "",
      selection: selection,
      ttype: "saveCompleted",
    });
    if (req.status === 200) {
      alert();
    }
  };

  const SaveUndo = async () => {
    const req = await Applytoall({
      data: "",
      selection: selection,
      ttype: "saveUndo",
    });
    if (req.status === 200) {
      alert();
    }
  };

  return (
    <div>
      {Modalbtn}

      <Modal
        id={id}
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ height: "80vh", overflowY: "scroll" }}>
            <Typography
              style={{
                fontSize: "16px",
                textTransform: "uppercase",
                color: "#61876E",
              }}
            >
              Advanced Options <FaCogs />
            </Typography>

            <span style={{ fontSize: "12px" }}>
              Perform actions on all items.
            </span>

            <Accordion>
              <AccordionSummary aria-controls="panel1a-content">
                <Typography style={{ fontSize: "14px", color: "#F16767" }}>
                  How things Work <AiOutlineQuestionCircle />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Box>
                    <h5>Set Emailed Date</h5>
                    <span
                      style={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      The emailed date will be set for all items, Without this
                      being configured, Every changes will not be saved except
                      Cancelled and Remarks.
                    </span>

                    <h5>Mark as Cancelled</h5>
                    <span
                      style={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      It will marked all item Cancelled except those items that
                      is marked delivered
                    </span>

                    <h5>Mark as Undelivered</h5>
                    <span
                      style={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      It will marked all item Undelivered except those items
                      that is marked delivered or Cancelled
                    </span>
                    <h5>Extend</h5>
                    <span
                      style={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      This will apply to either the Due Date or Duration, but
                      will not be effective if the specified dates have already
                      passed.
                    </span>

                    <h5>Mark as Delivered</h5>
                    <span
                      style={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      All items that have been delivered will be marked, but not
                      those that have been cancelled.
                    </span>

                    <h5>Mark as Completed</h5>
                    <span
                      style={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      All items that have been marked delivered will be marked
                      completed.
                    </span>

                    <h5>Create a Remarks</h5>
                    <span
                      style={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      Created Remarks will be applied to all items , old remarks
                      will be replaced.
                    </span>

                    <h5>Undo</h5>
                    <span
                      style={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      This will create an approve request to a user role
                      superior
                    </span>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Box p={5}>
              <ActionCheckbox
                setSelected={setSelected}
                setRemarks={setRemarks}
                clicked={clicked}
                setClicked={setClicked}
                emd={emd}
                setEmd={setEmd}
                error={error}
                setError={setError}
                setEmd1={setEmd1}
                emd1={emd1}
              />
            </Box>
          </Box>

          <div
            style={{
              position: "fixed",
              bottom: "10px",
              right: "20px",
              margin: "5px",
            }}
          >
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                setopenModal(false);
                setSelected();
                setError(false);
                setEmd();
                setEmd1();
                setClicked();
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                // setopenModal(false);
                switch (clicked) {
                  case "emaileddate":
                    if (emd) {
                      ApplytoAll(SaveEmail);
                    } else {
                      setError(true);
                    }
                    break;
                  case "Delivered":
                    if (emd1) {
                      ApplytoAll(SaveDelivered);
                    } else {
                      setError(true);
                    }
                    break;
                  case "Cancelled":
                    ApplytoAll(SaveCancelled);

                    break;
                  case "Undelivered":
                    ApplytoAll(SaveUndelivered);
                    break;
                  case "Extend":
                    ApplytoAll(SaveExtend);
                    break;

                  case "Remarks":
                    ApplytoAll(SaveRemarks);
                    break;

                  case "Complete":
                    ApplytoAll(SaveCompleted);
                    break;

                  default:
                    notify({
                      type: "error",
                      title: "No Selection",
                      message: "Please select one option first to continue",
                    });
                    break;
                }
              }}
              style={{ marginLeft: "10px" }}
            >
              Apply to All
            </Button>
          </div>

          <div
            style={{
              position: "fixed",
              bottom: "10px",
              right: "20px",
              margin: "5px",
            }}
          >
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                setopenModal(false);
                setSelected();
                setError(false);
                setEmd();
                setEmd1();
                setClicked();
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                // setopenModal(false);
                switch (clicked) {
                  case "emaileddate":
                    if (emd) {
                      ApplytoAll(SaveEmail);
                    } else {
                      setError(true);
                    }
                    break;
                  case "Delivered":
                    if (emd1) {
                      ApplytoAll(SaveDelivered);
                    } else {
                      setError(true);
                    }
                    break;
                  case "Cancelled":
                    ApplytoAll(SaveCancelled);

                    break;
                  case "Undelivered":
                    ApplytoAll(SaveUndelivered);
                    break;
                  case "Extend":
                    ApplytoAll(SaveExtend);
                    break;

                  case "Remarks":
                    ApplytoAll(SaveRemarks);
                    break;

                  case "Complete":
                    ApplytoAll(SaveCompleted);
                    break;

                  case "Undo":
                    ApplytoAll(SaveUndo);
                    break;

                  default:
                    notify({
                      type: "error",
                      title: "No Selection",
                      message: "Please select one option first to continue",
                    });
                    break;
                }
              }}
              style={{ marginLeft: "10px" }}
            >
              Apply to All
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
