import { authcontext } from "../contexts/context";
import React, { useEffect, useState } from "react";
import { getCookie, checkCookie, clearCookie } from "../hooks/Cookie";
import { FetchUserData } from "../controllers/auth/AuthController";
export const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState([]);

  const fetch = async () => {
    const res = await FetchUserData(getCookie().token.token)
      .then(function (response) {
        setAuth({ user: response.data.data[0] });
      })
      .catch(function (error) {
        clearCookie();
      });
  };

  useEffect(() => {
    if (checkCookie()) {
      if (Auth.length == 0) {
        fetch();
      }
    }
  }, []);

  return (
    <authcontext.Provider value={{ Auth, setAuth }}>
      {children}
    </authcontext.Provider>
  );
};

export default authcontext;
