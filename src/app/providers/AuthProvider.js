import { authcontext } from "../contexts/context";
import React, { useState } from "react";

export const AuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState([
    {
      data: null,
      isLoggedin: false,
      token: null,
    },
  ]);

  return (
    <authcontext.Provider value={{ Auth, setAuth }}>
      {children}
    </authcontext.Provider>
  );
};

export default authcontext;
