import React, { useEffect } from "react";
import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { AdminSidebar } from "../layouts/navs/NavData";
import Main from "../layouts/navs/Main";
import CustomPaginationActionsTable from "../../../components/Table";
import BasicModal from "../../../components/Modal";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { IoIosAddCircle } from "react-icons/io";
const Accounts = ({ Roles, Data }) => {
  const [closeModal, setCloseModal] = useState(false);
  const [roles, setRoles] = useState([]);
  const [data, setData] = useState([]);
  const [fetch, setFetch] = useState(false);

  const fetchDatas = async () => {
    setRoles(await Roles);
    setData(await Data);
  };

  useEffect(() => {
    fetchDatas();
    console.log("fetched");
  }, [fetch]);

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "email", label: "Email", minWidth: 100 },
    {
      id: "username",
      label: "Username",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "role",
      label: "Role",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "created",
      label: "Created",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  // function createData(dataid, name, username, email, role, created) {
  //   const density = population / size;
  //   return { dataid, name, username, email, role, created };
  // }

  //const rows = [createData("India", "IN", 1324171354, 3287263, 51715)];
  const rows = [];
  return (
    <div>
      <AdminLayout SidebarNav={AdminSidebar} />
      <Main>
        <h3>Accounts</h3>
        <BasicModal
          setFetch={setFetch}
          Modalbtn={
            <>
              Add <IoIosAddCircle />
            </>
          }
          ModalContent={[
            {
              typeofcontent: "AddAccount",
              data: roles,
            },
          ]}
          Close={closeModal}
          setClose={setCloseModal}
        />
        <CustomPaginationActionsTable columns={columns} rows={rows} />
      </Main>
    </div>
  );
};

export default Accounts;
