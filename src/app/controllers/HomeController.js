import React, { useEffect } from "react";
import { useAuth } from "../hooks/ContextHooks";
import { useNavigate, Outlet } from "react-router-dom";
import { checkCookie } from "../hooks/Cookie";
function HomeController() {
  const navigate = useNavigate();
  const { Auth } = useAuth();

  useEffect(() => {
    if (!checkCookie()) {
      navigate("/login");
    }
  }, []);

  return <Outlet />;
}

export default HomeController;
