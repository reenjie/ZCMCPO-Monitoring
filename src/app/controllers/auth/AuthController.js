import axios from "axios";
import { loginUri, FetchAuthUser } from "../../uri";

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
