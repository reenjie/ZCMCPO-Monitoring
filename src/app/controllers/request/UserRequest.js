import {
  FetchPurchaseOrderUri,
  FetchAdvanceSortSCUUri,
  SetNewtoViewedUri,
  FetchRecentUri,
  GetPOstatusUri,
  SetStatusUri,
  SetEmailedDateUri,
  UndoActionUri,
  UpdateDueUri,
  SetDeliveredDateURI,
  ApplytoallUri,
} from "../../uri";
import axios from "axios";

export const FetchPurchaseOrder = async (data) => {
  return await axios.post(FetchPurchaseOrderUri(), data);
};

export const FetchAdvanceSortSCU = async (data) => {
  return await axios.post(FetchAdvanceSortSCUUri(), data);
};

export const SetViewed = async (data) => {
  return await axios.post(SetNewtoViewedUri(), data);
};

export const FetchRecent = async (data) => {
  return await axios.post(FetchRecentUri(), data);
};

export const GetPOstatus = async (data) => {
  return await axios.post(GetPOstatusUri(), data);
};

export const SetStatus = async (data) => {
  return await axios.post(SetStatusUri(), data);
};

export const SetEmailed = async (data) => {
  return await axios.post(SetEmailedDateUri(), data);
};

export const UndoAction = async (data) => {
  return await axios.post(UndoActionUri(), data);
};

export const UpdateDue = async (data) => {
  return await axios.post(UpdateDueUri(), data);
};

export const SetDeliveredDate = async (data) => {
  return await axios.post(SetDeliveredDateURI(), data);
};

export const Applytoall = async (data) => {
  return await axios.post(ApplytoallUri(), data);
};
