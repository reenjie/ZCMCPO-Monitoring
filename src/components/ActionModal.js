import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AddAccounts } from "../resources/pages/admin/components/ModalContent";

import { FaCogs } from "react-icons/fa";
import ManageItems from "./ManageItems";
const style = {
  position: "absolute",
  top: "30%",
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
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

          <span style={{ fontSize: "12px" }}>Manage All items at once</span>

          <Box></Box>

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
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setopenModal(false);
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
