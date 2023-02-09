import { api } from "../../config/api";

export const loginUri = ({ username, password }) => {
  return `${api}/login?username=` + username + `&password=` + password;
};
