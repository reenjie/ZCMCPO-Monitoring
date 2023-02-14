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
import { FetchRoles } from "../../../app/controllers/auth/AuthController";
import { FetchUserData } from "../../../app/controllers/request/AdminRequest";
import { IoIosAddCircle } from "react-icons/io";
const Accounts = ({ Roles, Data }) => {
  const [openModal, setopenModal] = useState(false);
  const [roles, setRoles] = useState([]);
  const [data, setData] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const fetchDatas = async () => {
      setRoles(await FetchRoles());
      setData(await FetchUserData());
    };
    fetchDatas();
    setFetch(false);
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
      id: "roles",
      label: "Role",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "created_at",
      label: "Created",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "action",
      label: "Action",
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
  const rows = [data.data];
  // console.log();

  return (
    <div>
      <AdminLayout SidebarNav={AdminSidebar} />
      <Main>
        <h3>Accounts</h3>
        <BasicModal
          setFetch={setFetch}
          Modalbtn={
            <Button
              color="success"
              onClick={() => {
                setopenModal(true);
              }}
            >
              Add <IoIosAddCircle />
            </Button>
          }
          ModalContent={[
            {
              typeofcontent: "AddAccount",
              data: roles,
            },
          ]}
          openModal={openModal}
          setopenModal={setopenModal}
        />
        <CustomPaginationActionsTable
          tabletype="accounts"
          columns={columns}
          rows={rows}
          setFetch={setFetch}
          openModal={openModal}
          setopenModal={setopenModal}
          roles={roles}
        />
      </Main>
    </div>
  );
};

export default Accounts;
