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

export const AdminCheckAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkCookie()) {
      const res = FetchUserData(getCookie().token.token)
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

export const UserCheckAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (checkCookie()) {
      const res = FetchUserData(getCookie().token.token)
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

export const RedirectIfAuthenticated = () => {
  const navigate = useNavigate();
  useEffect(() => {
    return getCookie().token.role == 1 ? (
      navigate("/admin")
    ) : getCookie().token.role == 2 ? (
      navigate("/user") //user
    ) : (
      <Outlet />
    );
  });
};
