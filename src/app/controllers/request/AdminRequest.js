import axios from "axios";
import {
  SaveUserUri,
  FetchUserDataUri,
  DeleteUserDataUri,
  UpdateUserDataUri,
} from "../../uri";
   
export const SaveUser = async (data) => {
  return await axios.post(SaveUserUri(), data);
};

export const FetchUserData = async () => {
  return await axios.post(FetchUserDataUri());
};

export const UpdateUserData = async (data) => {
  return await axios.post(UpdateUserDataUri(), data);
};

export const DeleteUserData = async (data) => {
  return await axios.post(DeleteUserDataUri(), data);
};
