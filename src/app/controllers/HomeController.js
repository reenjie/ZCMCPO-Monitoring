import React, { useEffect } from "react";
import { useAuth } from "../hooks/ContextHooks";
import { useNavigate, Outlet } from "react-router-dom";
import { checkCookie, getCookie } from "../hooks/Cookie";

export const AdminCheckAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkCookie()) {
      navigate("/login");
    }
  }, []);
  return checkCookie() && getCookie().token.role == 1 && <Outlet />;
};

export const UserCheckAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
