import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AddAccounts } from "../resources/pages/admin/components/ModalContent";
import ActionCheckbox from "./ActionCheckbox";
import { notify, question } from "./Sweetalert";
import { Applytoall } from "../app/controllers/request/UserRequest";

import { FaCogs } from "react-icons/fa";
import ManageItems from "./ManageItems";
import { useState } from "react";
const style = {
  position: "absolute",
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
  const [error, setError] = useState(false);

  const SaveEmail = async () => {
    const req = await Applytoall({
      emaildate: emd,
      selection: selection,
    });

    if (req.status === 200) {
      setRefresh(true);
    }
  };

  return (
    <div>
      {Modalbtn}

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            />
          </Box>

          <div
            style={{
              position: "absolute",
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
                      SaveEmail();
                    } else {
                      setError(true);
                    }

                    break;
                }
                // if (selected) {
                //   question({
                //     title: "Are you sure?",
                //     message: "Changes will be saved to all items selected",
                //     type: "warning",
                //     btndanger: false,
                //     action: handleApplytoall,
                //   });
                // } else {
                //   notify({
                //     type: "error",
                //     title: "No Selection!",
                //     message: "Please Select in the Options First",
                //   });
                // }
              }}
              style={{ marginLeft: "10px" }}
            >
              Apply to All
            </Button>
          </div>

          <Box></Box>
        </Box>
      </Modal>
    </div>
  );
}
