import React from "react";
import Cookies from "js-cookie";

export function setCookie(token) {
  Cookies.set(
    "token",
    JSON.stringify({
      token: token,
    })
  );
}

export function checkCookie() {
  if (getCookie()) {
    return true;
  } else {
    return false;
  }
}

export function clearCookie() {
  Cookies.remove("token");
}

export function getCookie() {
  return Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";
}
