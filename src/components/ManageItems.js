import React, { useState } from "react";
import { Typography, Stack, Button } from "@mui/material";
import { question } from "../components/Sweetalert";
import { SetStatus } from "../app/controllers/request/UserRequest";
import { LoadingButton } from "@mui/lab";
import { TiCancel } from "react-icons/ti";
import { GiFlatTire } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { HiClock } from "react-icons/hi";
import BasicModal from "./Modal";
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
}) {
  const handleCancel = () => {
    cancel(id);
    setLoad(true);
  };
  const handleUndeliver = () => {
    undeliver(id);
    setLoad(true);
  };
  const handleextend = () => {
    extend(id, Terms);
    setLoad(true);
  };
  const handleDeliver = () => {
    deliver(id);
    setLoad(true);
  };

  const { status, emailed_date } = trans.filter((x) => x.FK_PoID == id)[0];
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
          Action
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

          <Button
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
          >
            <div style={{ display: "flex" }}>
              <h5>Mark as Delivered</h5>
            </div>
          </Button>

          <Button
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
            disabled={status == 1 ? true : false}
            loading={load}
          >
            <div style={{ display: "flex" }}>
              <h5>Mark as Undelivered</h5>
            </div>
          </Button>

          <Button
            variant="contained"
            color="warning"
            onClick={() => {
              question({
                title: "Are you sure",
                message: "you want to cancel transaction?",
                type: "warning",
                btndanger: false,
                action: handleextend,
              });
            }}
            loading={load}
            disabled={emailed_date == null ? true : false}
          >
            <div style={{ display: "flex" }}>
              <h5>Extend</h5>
            </div>
          </Button>
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
            disabled={status == 3 ? true : false}
            loading={load}
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
        </Stack>
      </div>
    </div>
  );
}

export default ManageItems;
