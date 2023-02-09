import React from "react";
import { useState } from "react";
import "../../../assets/css/login.css";
import {
  Button,
  TextField,
  FormControl,
  LoadingButton,
  SendIcon,
  OutlinedInput,
  Visibility,
  VisibilityOff,
  InputAdornment,
  IconButton,
  InputLabel,
  AiOutlineLogin,
  Box,
  FormControlLabel,
  Checkbox,
  Alert,
} from "../../../components/MaterialUI";
import logo from "../../../assets/image/zcmc_logo.png";
import { useAuth } from "../../../app/hooks/ContextHooks";
import { loginUri } from "../../../app/controllers/auth/AuthController";

function Login() {
  const { Auth } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    if (username == "" || password == "") {
      setValidate(true);
      setInvalidMessage("Please fill all fields");
    } else {
      setLoading(true);
      /* Set Backend here.. */
    }
  };

  const AlertNotify = ({ type, Message }) => {
    return (
      <>
        <Alert sx={{ marginBottom: "10px" }} severity={type}>
          {Message}
        </Alert>
      </>
    );
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="card">
      <div className="logincard">
        <div className="title">
          <img src={logo} alt="" /> <span>P.O Monitoring</span>
        </div>
        {validate && (
          <>
            {" "}
            <AlertNotify type="error" Message={invalidMessage} />
          </>
        )}
        <TextField
          color="success"
          fullWidth
          id="fullWidth"
          label="Username"
          variant="outlined"
          autoFocus
          sx={{ marginBottom: "17px" }}
          error={validate}
          onChange={(e) => {
            setUsername(e.target.value);
            setValidate(false);
          }}
        />

        <TextField
          error={validate}
          fullWidth
          color="success"
          label="Password"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => {
            setPassword(e.target.value);
            setValidate(false);
          }}
        />
        <Box sx={{ textAlign: "left" }}>
          <Checkbox id="checkpass" onChange={handleClickShowPassword} />
          <label
            htmlFor="checkpass"
            style={{ fontSize: "13px", color: "#5f675f" }}
          >
            Show password
          </label>
        </Box>
        <LoadingButton
          size="large"
          onClick={handleClick}
          endIcon={<AiOutlineLogin />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          color="success"
          sx={{ padding: "14px", marginTop: "10px" }}
          fullWidth
        >
          <span>{loading ? "Signing In" : "Sign In"}</span>
        </LoadingButton>

        <span id="footer">Material Management Supply &middot; 2023</span>
      </div>
    </div>
  );
}

export default Login;
