import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AddAccounts } from "../resources/pages/admin/components/ModalContent";
import { SetEmailedDate } from "./SetEmailedDate";
import { MarkDelivered } from "./MarkDelivered";
import { SetRemarks } from "./SetRemarks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  Modalbtn,
  ModalContent,
  setFetch,
  setopenModal,
  openModal,
  setRefresh,
  Terms,
  remarks,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* onClick={handleOpen} */}

      {Modalbtn}

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {ModalContent[0].typeofcontent == "AddAccount" ? (
            <AddAccounts
              action="add"
              roles={ModalContent[0].data}
              handleClose={setopenModal}
              setFetch={setFetch}
            />
          ) : ModalContent[0].typeofcontent == "EditAccount" ? (
            <AddAccounts
              action="edit"
              roles={ModalContent[0].roles}
              data={ModalContent[0].userdata}
              handleClose={setopenModal}
              setFetch={setFetch}
            />
          ) : ModalContent[0].typeofcontent == "SetEmailedDate" ? (
            <SetEmailedDate
              id={ModalContent[0].data}
              handleClose={setopenModal}
              setRefresh={setRefresh}
              Terms={Terms}
            />
          ) : ModalContent[0].typeofcontent == "markReceived" ? (
            <MarkDelivered
              handleClose={setopenModal}
              id={ModalContent[0].data}
              setRefresh={setRefresh}
            />
          ) : ModalContent[0].typeofcontent == "setRemarks" ? (
            <SetRemarks
              handleClose={setopenModal}
              id={ModalContent[0].data}
              setRefresh={setRefresh}
              remarks={remarks}
            />
          ) : (
            ""
          )}
        </Box>
      </Modal>
    </div>
  );
}
