import React, { useEffect } from "react";
import { useAuth } from "../hooks/ContextHooks";
import { useNavigate, Outlet } from "react-router-dom";
import { checkCookie, getCookie, clearCookie } from "../hooks/Cookie";
import { FetchUserData } from "./auth/AuthController";
import { notify } from "../../components/Sweetalert";

function NoteExpired() {
  notify({
    title: "Session has Expired!",
    type: "error",
    message: "Please Relogin Again.",
  }).then(() => {
    window.location.reload();
  });
}

/* All Logins Redirects */
export const RedirectIfAuthenticated = () => {
  const navigate = useNavigate();
  useEffect(() => {
    return getCookie().token.role == 1 ? (
      navigate("/admin")
    ) : getCookie().token.role == 2 ? (
      navigate("/user") //user
    ) : getCookie().token.role == 4 ? (
      navigate("/Dashboard")
    ) : (
      <Outlet />
    );
  });
};

/* Check Admin Authentication */
export const AdminCheckAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkCookie()) {
      const res = FetchUserData({
        token: getCookie().token.token,
        role: getCookie().token.role,
      })
        .then(function (response) {})
        .catch(function (error) {
          NoteExpired();
          clearCookie();
        });
    }
    if (!checkCookie()) {
      navigate("/login");
    }
  }, []);
  return checkCookie() && getCookie().token.role == 1 && <Outlet />;
};

/* Check user Authentication */
export const UserCheckAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkCookie()) {
      const res = FetchUserData({
        token: getCookie().token.token,
        role: getCookie().token.role,
      })
        .then(function (response) {})
        .catch(function (error) {
          clearCookie();
          NoteExpired();
        });
    }

    if (!checkCookie()) {
      navigate("/login");
    }
  }, []);
  return checkCookie() && getCookie().token.role == 2 && <Outlet />;
};

export const SupervisorAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkCookie()) {
      const res = FetchUserData({
        token: getCookie().token.token,
        role: getCookie().token.role,
      })
        .then(function (response) {})
        .catch(function (error) {
          clearCookie();
          NoteExpired();
        });
    }

    if (!checkCookie()) {
      navigate("/login");
    }
  }, []);
  return checkCookie() && getCookie().token.role == 4 && <Outlet />;
};
