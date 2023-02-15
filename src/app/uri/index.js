import { api } from "../config/api";

export const loginUri = () => {
  return `${api}/login`;
};

export const FetchAuthUser = () => {
  return `${api}/User`;
};

export const FetchRole = () => {
  return `${api}/Roles`;
};

export const SaveUserUri = () => {
  return `${api}/User/New`;
};

export const FetchUserDataUri = () => {
  return `${api}/User/data`;
};

export const UpdateUserDataUri = () => {
  return `${api}/User/update`;
};

export const DeleteUserDataUri = () => {
  return `${api}/User/delete`;
};

export const ChangePasswordUri = () => {
  return `${api}/User/changepass`;
};

export const changeNameUri = () => {
  return `${api}/User/changename`;
};
