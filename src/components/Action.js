import React, { useState } from "react";
import { Button } from "@mui/material";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { DeleteUserData } from "../app/controllers/request/AdminRequest";
import { question } from "./Sweetalert";
import { LoadingButton } from "@mui/lab";
import BasicModal from "./Modal";

export const Edit = ({ data, tabletype, setFetch, roles }) => {
  const [openModal, setopenModal] = useState(false);
  const HandleClick = () => {
    switch (tabletype) {
      case "accounts":
        console.log(data);
        break;
    }
  };
  return (
    <>
      <BasicModal
        Modalbtn={
          <>
            <Button
              size="large"
              onClick={() => {
                setopenModal(true);
              }}
              color="success"
            >
              <BiEdit />
            </Button>
          </>
        }
        ModalContent={[
          {
            typeofcontent: "EditAccount",
            roles: roles,
            userdata: data,
          },
        ]}
        openModal={openModal}
        setopenModal={setopenModal}
        setFetch={setFetch}
      />
    </>
  );
};

export const Delete = ({ data, tabletype, setFetch }) => {
  const [load, setLoad] = useState(false);
  const actions = async () => {
    try {
      switch (tabletype) {
        case "accounts":
          setLoad(true);
          const res = await DeleteUserData({
            id: data.dataid,
          });
          if (res.status == 200) {
            setFetch(true);
          }

          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleClick = () => {
    question({
      title: "Are you sure?",
      message: "You will not be able to recover it.",
      type: "warning",
      btndanger: true,
      action: actions,
    });
  };
  return (
    <LoadingButton
      loading={load}
      size="large"
      onClick={HandleClick}
      color="error"
    >
      <AiOutlineDelete />
    </LoadingButton>
  );
};
