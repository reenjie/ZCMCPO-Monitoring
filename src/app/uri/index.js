import { api } from "../config/api";

export const loginUri = () => {
  return `${api}/login`;
};

export const FetchAuthUser = () => {
  return `${api}/User`;
};
