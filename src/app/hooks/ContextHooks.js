import React, { useContext } from "react";
import { authcontext } from "../contexts/context";

export const useAuth = () => {
  return useContext(authcontext);
};
