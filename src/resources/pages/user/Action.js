import React from "react";
import "../../../assets/css/action.css";
import UserLayout from "../layouts/UserLayout";
import { UserSidebar } from "../layouts/navs/UserNavData";
import Main from "../layouts/navs/Main";
import {
  Container,
  Button,
  Grid,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { VscOutput } from "react-icons/vsc";
import { grey } from "@mui/material/colors";
import Transaction from "../../../components/Transaction";
const Action = () => {
  const delivered = () => {};
  return (
    <>
      <UserLayout SidebarNav={UserSidebar} />
      <Main>
        <Grid container justifyContent={"center"}>
          <Transaction />
        </Grid>
      </Main>
    </>
  );
};

export default Action;
