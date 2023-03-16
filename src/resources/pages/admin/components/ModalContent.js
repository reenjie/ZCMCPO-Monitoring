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
import {
  SaveUser,
  UpdateUserData,
} from "../../../../app/controllers/request/AdminRequest";
import { notify } from "../../../../components/Sweetalert";
import { getCookie } from "../../../../app/hooks/Cookie";
export const AddAccounts = ({ handleClose, roles, setFetch, action, data }) => {
  const [fname, setfName] = useState(action == "edit" ? data.name : "");
  const [lname, setlName] = useState("");
  const [username, setUsername] = useState(
    action == "edit" ? data.username : ""
  );
  const [id, setID] = useState(action == "edit" ? data.dataid : null);
  const [email, setEmail] = useState(action == "edit" ? data.email : "");
  const [srole, setSrole] = useState(action == "edit" ? data.roles : "");
  const [pass, setPassword] = useState("");
  const [repass, setrePassword] = useState("");
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (pass) {
        if (!repass) {
          setError(true);
        } else {
          if (pass == repass) {
            setLoad(true);
            const update = await UpdateUserData({
              id: id,
              name: fname,
              username: username,
              pass: pass,
              token: getCookie().token.token,
            });

            if (update.status == 200) {
              setError(false);
              setLoad(true);
              handleClose(false);
              notify({
                type: "success",
                title: "Updated Successfully",
                message: "Account Updated Successfully!",
              });
              setFetch(true);
            }
          } else {
            setError(true);
          }
        }
      } else {
        setLoad(true);
        const update = await UpdateUserData({
          id: id,
          name: fname,
          username: username,
          pass: null,
          token: getCookie().token.token,
        });

        if (update.status == 200) {
          setError(false);
          setLoad(true);
          handleClose(false);
          notify({
            type: "success",
            title: "Updated Successfully",
            message: "Account Updated Successfully!",
          });
          setFetch(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass == repass) {
      setError(false);
      setLoad(true);
      try {
        const save = await SaveUser({
          name: fname + " " + lname,
          email: email,
          username: username,
          srole: srole,
          pass: pass,
          token: getCookie().token.token,
        });
        if (save.status == 200) {
          handleClose(false);
          notify({
            type: "success",
            title: "Added Successfully",
            message: "Account Added Successfully!",
          });
          setFetch(true);
        }
      } catch (error) {
        notify({
          type: "error",
          title: "Failed to Add.",
          message:
            "Possible Reason might be Email is Invalid or Already exist. or Username already Exist ,",
        });
        handleClose(false);
      }
    } else {
      setError(true);
    }
  };
  return (
    <>
      <h3 style={{ marginBottom: "10px", fontWeight: "normal" }}>
        <span>{action}</span> Accounts
      </h3>
      <form
        method="post"
        onSubmit={action == "add" ? handleSubmit : handleUpdate}
      >
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
              disabled={action == "edit" && true}
            />
          </Grid>

          {action == "edit" ? (
            <Grid item xs={6} md={12}>
              <TextField
                fullWidth
                size="small"
                sx={{ marginBottom: "10px" }}
                label=" Name"
                variant="outlined"
                name="name"
                value={fname}
                onChange={(e) => {
                  setfName(e.target.value);
                }}
                required
              />
            </Grid>
          ) : (
            <>
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
            </>
          )}

          <Grid item xs={6} md={action == "edit" ? 12 : 6}>
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

          {action == "add" && (
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
                  {roles.map((row) => {
                    return <MenuItem value={row.id}>{row.roles}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Grid>
          )}
          {action == "edit" && (
            <Grid item xs={6} md={12}>
              <span style={{ fontSize: "11px", color: "red" }}>
                Fill in Below to Change your password.
              </span>
            </Grid>
          )}

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
              required={action == "add" ? true : false}
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
              required={action == "add" ? true : false}
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
