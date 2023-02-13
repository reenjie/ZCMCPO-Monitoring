import axios from "axios";
import { loginUri, FetchAuthUser, FetchRole } from "../../uri";

export const Signin = async (username, password) => {
  return await axios.post(loginUri(), {
    username: username,
    password: password,
  });
};

export const FetchUserData = async (token) => {
  return await axios.post(FetchAuthUser(), {
    token: token,
  });
};

export const FetchRoles = async () => {
  return await axios.post(FetchRole(), {});
};
