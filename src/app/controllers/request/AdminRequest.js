import axios from "axios";
import { SaveUserUri, FetchUserDataUri } from "../../uri";

export const SaveUser = async (data) => {
  return await axios.post(SaveUserUri(), data);
};

export const FetchUserData = async () => {
  return await axios.post(FetchUserDataUri());
};
