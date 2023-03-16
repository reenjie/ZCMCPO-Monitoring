import React from "react";
import { getCookie } from "../hooks/Cookie";

export const Authorize_Personnel = () => {
  /*  Authorize access */
  /* 
        2 = MMS_user
        4 = Supervisor
    */
  if (getCookie().token.role === 2 || getCookie().token.role === 4) {
    return true;
  }

  return false;
};

export const manage = () => {
  if (getCookie().token.role === 2) {
    return "/manage";
  }

  if (getCookie().token.role === 4) {
    return "/manage_";
  }
};

export const back = () => {
  if (getCookie().token.role === 2) {
    return "/user";
  }
  if (getCookie().token.role === 4) {
    return "/Dashboard";
  }
};
