import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { AdminSidebar, Supervisorsidebar } from "../../../data/NavData";
import Main from "../layouts/navs/Main";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Alert, Divider } from "@mui/material";
import { FetchUserData } from "../../../app/controllers/auth/AuthController";
import { getCookie } from "../../../app/hooks/Cookie";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import { useAuth } from "../../../app/hooks/ContextHooks";
import { UserSidebar } from "../../../data/NavData";
import UserLayout from "../layouts/UserLayout";
import SupervisorLayout from "../layouts/SupervisorLayout";
import {
  ChangePassUserData,
  ChangeNameUserData,
} from "../../../app/controllers/request/AdminRequest";
function Settings({ usertype }) {
  const [view, setView] = useState(false);
  const { Auth } = useAuth();
  const [oldpass, setOldPass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [repass, setRepass] = useState("");
  const [errordef, setErrordef] = useState(false);
  const [errorre, setErrorre] = useState(false);
  const [save, setSave] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [created, setCreated] = useState(null);

  const fetchUser = async () => {
    const res = await FetchUserData({
      token: getCookie().token.token,
      role: getCookie().token.role,
    });

    setName(res.data.data[0].name);
    setEmail(res.data.data[0].email);
    setCreated(res.data.data[0].created_at);
  };

  useEffect(() => {
    fetchUser();
    setTimeout(() => {
      setSave(false);
    }, 4000);
  }, [save]);

  const handleClickShowPassword = () => setView((show) => !show);
  const handleChangePass = async (e) => {
    e.preventDefault();

    const res = await ChangePassUserData({
      id: Auth.user.id,
      username: Auth.user.username,
      oldpass: oldpass,
      newpass: newpass,
      repass: repass,
    });

    if (res.data.response == "notmatchtodefault") {
      setErrordef(true);
    }

    if (res.data.response == "unmatch") {
      setErrordef(false);
      setErrorre(true);
    }

    if (res.data.response == "match") {
      setSave(true);
      setErrordef(false);
      setErrorre(false);
      setOldPass("");
      setNewpass("");
      setRepass("");
    }
  };

  const handleChange = async () => {
    const res = await ChangeNameUserData({
      id: Auth.user.id,
      name: name,
    });
  };
  return (
    <div>
      {usertype == "admin" ? (
        <AdminLayout SidebarNav={AdminSidebar} />
      ) : usertype == "supervisor" ? (
        <SupervisorLayout SidebarNav={Supervisorsidebar} />
      ) : (
        <UserLayout SidebarNav={UserSidebar} />
      )}
      <Main>
        <Grid container spacing={2} mt={2}>
          <Grid xs={6} md={2}></Grid>
          <Grid xs={6} md={8}>
            <Paper elevation={3} sx={{ padding: "20px" }}>
              <h3>Account Settings</h3>
              <h6 style={{ color: "gray" }}> Manage Profile </h6>
              <h5>Email</h5>
              <TextField
                fullWidth
                sx={{ marginTop: "2px" }}
                size="small"
                id="outlined-basic"
                variant="outlined"
                type={"text"}
                required
                value={email}
                disabled
              ></TextField>
              <h5>Name</h5>
              <TextField
                fullWidth
                sx={{ marginTop: "2px" }}
                size="small"
                id="outlined-basic"
                variant="outlined"
                type={"text"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  handleChange();
                }}
              />

              <Paper eleveation={3} sx={{ padding: "40px" }}>
                <h6>Created At : {created}</h6>
              </Paper>

              <h6 style={{ color: "gray", marginTop: "20px" }}>
                Change Password{" "}
              </h6>
              <form method="post" onSubmit={handleChangePass}>
                {save && (
                  <Alert severity="success">
                    Password Changed Successfully!
                  </Alert>
                )}
                <TextField
                  fullWidth
                  sx={{ marginTop: "10px" }}
                  size="small"
                  id="outlined-basic"
                  label="Old Password"
                  variant="outlined"
                  type={view ? "text" : "password"}
                  required
                  value={oldpass}
                  onChange={(e) => {
                    setOldPass(e.target.value);
                  }}
                  error={errordef}
                />
                {errordef && (
                  <span style={{ fontSize: "14px", color: "red" }}>
                    Does not match to your current password
                  </span>
                )}

                <TextField
                  fullWidth
                  sx={{ marginTop: "10px" }}
                  size="small"
                  id="outlined-basic"
                  label="New Password"
                  variant="outlined"
                  type={view ? "text" : "password"}
                  required
                  value={newpass}
                  onChange={(e) => {
                    setNewpass(e.target.value);
                  }}
                />

                <TextField
                  fullWidth
                  sx={{ marginTop: "10px" }}
                  size="small"
                  id="outlined-basic"
                  label="Re-Enter Password"
                  variant="outlined"
                  type={view ? "text" : "password"}
                  required
                  value={repass}
                  onChange={(e) => {
                    setRepass(e.target.value);
                  }}
                  error={errorre}
                />
                {errorre && (
                  <span style={{ fontSize: "14px", color: "red" }}>
                    Password Does Not Match
                  </span>
                )}
                <Box sx={{ textAlign: "left" }}>
                  <Checkbox id="checkpass" onChange={handleClickShowPassword} />
                  <label
                    htmlFor="checkpass"
                    style={{ fontSize: "13px", color: "#5f675f" }}
                  >
                    Show password
                  </label>
                </Box>

                <Button
                  style={{ marginTop: "10px" }}
                  size="small"
                  variant="contained"
                  type="submit"
                >
                  Save Changes
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid xs={6} md={2}></Grid>
        </Grid>
      </Main>
    </div>
  );
}

export default Settings;
