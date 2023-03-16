import axios from "axios";
import {
  loginUri,
  FetchAuthUser,
  FetchRole,
  fetchlogsUri,
  logoutUserURi,
} from "../../uri";

export const Signin = async (username, password) => {
  return await axios.post(loginUri(), {
    username: username,
    password: password,
  });
};

export const FetchUserData = async (data) => {
  return await axios.post(FetchAuthUser(), data);
};

export const FetchRoles = async () => {
  return await axios.post(FetchRole(), {});
};

export const fetchlogs = async (data) => {
  return await axios.post(fetchlogsUri(), data);
};

export const logoutUser = async (data) => {
  return await axios.post(logoutUserURi(), data);
};
