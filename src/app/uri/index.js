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

export const FetchPurchaseOrderUri = () => {
  return `${api}/FetchPurchaseOrder`;
};

export const FetchAdvanceSortSCUUri = () => {
  return `${api}/FetchAdvanceSortSCU`;
};

export const SetNewtoViewedUri = () => {
  return `${api}/SetNewtoViewed`;
};

export const FetchRecentUri = () => {
  return `${api}/FetchRecent`;
};

export const GetPOstatusUri = () => {
  return `${api}/FetchPOstatus`;
};

export const SetStatusUri = () => {
  return `${api}/SetStatus`;
};

export const SetEmailedDateUri = () => {
  return `${api}/setEmaileddate`;
};

export const UndoActionUri = () => {
  return `${api}/UndoAction`;
};

export const UpdateDueUri = () => {
  return `${api}/UpdateDue`;
};

export const SetDeliveredDateURI = () => {
  return `${api}/SetDeliveredDate`;
};

export const ApplytoallUri = () => {
  return `${api}/Applytoall`;
};

export const MarkCompleteURI = () => {
  return `${api}/MarkComplete`;
};

export const cardCountUri = () => {
  return `${api}/cardCount`;
};

export const filterRecentUri = () => {
  return `${api}/filterRecent`;
};

export const logoutUserURi = () => {
  return `${api}/logoutUser`;
};

export const fetchlogsUri = () => {
  return `${api}/fetchlogs`;
};

export const fetchForapprovalURI = () => {
  return `${api}/fetchForapproval`;
};
