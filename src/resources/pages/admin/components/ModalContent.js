import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState, useRef } from "react";
import { SaveUser } from "../../../../app/controllers/request/AdminRequest";
import { notify } from "../../../../components/Sweetalert";
export const AddAccounts = ({ handleClose, roles, setFetch }) => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [srole, setSrole] = useState("");
  const [pass, setPassword] = useState("");
  const [repass, setrePassword] = useState("");
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass == repass) {
      setError(false);
      setLoad(true);

      const save = await SaveUser({
        name: fname + " " + lname,
        email: email,
        username: username,
        srole: srole,
        pass: pass,
      });
      if (save.status == 200) {
        handleClose();
        notify({
          type: "success",
          title: "Added Successfully",
          message: "Account Added Successfully!",
        }).then(() => {
          setFetch(true);
        });
      }
    } else {
      setError(true);
    }
  };
  return (
    <>
      <h3 style={{ marginBottom: "10px", fontWeight: "normal" }}>
        Add Accounts
      </h3>
      <form method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={12}>
            <TextField
              fullWidth
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Email"
              variant="outlined"
              name="fname"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              size="small"
              sx={{ marginBottom: "10px" }}
              label="First Name"
              variant="outlined"
              name="fname"
              value={fname}
              onChange={(e) => {
                setfName(e.target.value);
              }}
              required
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Last Name"
              variant="outlined"
              value={lname}
              onChange={(e) => {
                setlName(e.target.value);
              }}
              required
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </Grid>

          <Grid item xs={6} md={6}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Roles"
                size="small"
                value={srole}
                onChange={(e) => {
                  setSrole(e.target.value);
                }}
                required
              >
                {roles.data.data.map((row) => {
                  return <MenuItem value={row.id}>{row.roles}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              type={"password"}
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Password"
              variant="outlined"
              value={pass}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </Grid>
          <Grid item xs={6} md={6}>
            {" "}
            <TextField
              fullWidth
              type={"password"}
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Re-EnterPassword"
              variant="outlined"
              value={repass}
              onChange={(e) => {
                setrePassword(e.target.value);
              }}
              required
              error={error}
            />
            {error && (
              <span style={{ fontSize: "11px", color: "red" }}>
                Password Does not match
              </span>
            )}
          </Grid>
        </Grid>
        <div style={{ float: "right", marginTop: "10px" }}>
          <LoadingButton
            variant="contained"
            size="small"
            color="success"
            sx={{ padding: "4px 30px" }}
            type="submit"
            loading={load}
          >
            {" "}
            Save
          </LoadingButton>
          <Button
            type="button"
            variant="contained"
            size="small"
            sx={{ marginLeft: "5px" }}
            onClick={() => handleClose()}
          >
            {" "}
            Close
          </Button>
        </div>
      </form>
    </>
  );
};
