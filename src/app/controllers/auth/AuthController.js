import axios from "axios";
import { loginUri } from "../../uri";

export const Signin = (username, password) => {
  axios
    .post(loginUri(), {
      username: username,
      password: password,
    })
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
