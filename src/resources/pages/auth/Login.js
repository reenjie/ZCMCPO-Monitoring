import React, { useEffect } from "react";
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
import { Signin } from "../../../app/controllers/auth/AuthController";
import {
  setCookie,
  getCookie,
  validateUser,
  checkCookie,
} from "../../../app/hooks/Cookie";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    if (checkCookie()) {
      navigate("/home");
    }
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    if (username == "" || password == "") {
      setValidate(true);
      setAlertType("error");
      setInvalidMessage("Please fill all fields");
    } else {
      setLoading(true);
      Signin(username, password)
        .then(function (response) {
          setValidate(true);
          setAlertType("success");
          setInvalidMessage(response.data.message);
          setCookie({
            token: response.data.token,
            role: response.data.role,
          });
        })
        .catch(function (error) {
          setInvalidMessage(error.response.data.message);
          setPassword("");
          setAlertType("error");
          setValidate(true);
          setLoading(false);
        });
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
          <img src={logo} alt="" />
          <span>P.O Monitoring</span>
        </div>
        {validate && (
          <>
            {" "}
            <AlertNotify type={alertType} Message={invalidMessage} />
          </>
        )}

        <form method="post">
          <TextField
            color="success"
            fullWidth
            id="fullWidth"
            label="Username"
            variant="outlined"
            autoFocus
            sx={{ marginBottom: "17px" }}
            error={validate ? (alertType == "success" ? false : true) : false}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setValidate(false);
            }}
            required
          />

          <TextField
            error={validate ? (alertType == "success" ? false : true) : false}
            fullWidth
            color="success"
            label="Password"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
              setValidate(false);
            }}
            required
            value={password}
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
            type="submit"
          >
            <span>{loading ? "Signing In" : "Sign In"}</span>
          </LoadingButton>
        </form>
        <span id="footer">Material Management Supply &middot; 2023</span>
      </div>
    </div>
  );
}

export default Login;
