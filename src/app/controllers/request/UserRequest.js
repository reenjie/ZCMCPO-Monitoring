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
  MarkCompleteURI,
  cardCountUri,
  filterRecentUri,
  fetchForapprovalURI,
  approvedUndoURI,
} from "../../uri";
import { getCookie } from "../../hooks/Cookie";
import axios from "axios";

export const FetchPurchaseOrder = async (data) => {
  return await axios.post(FetchPurchaseOrderUri(), {
    data: data,
    token: getCookie().token.token,
  });
};

export const FetchAdvanceSortSCU = async (data) => {
  return await axios.post(FetchAdvanceSortSCUUri(), data);
};

export const SetViewed = async (data) => {
  return await axios.post(SetNewtoViewedUri(), {
    data: data,
    token: getCookie().token.token,
  });
};

export const FetchRecent = async (data) => {
  return await axios.post(FetchRecentUri(), data);
};

export const GetPOstatus = async (data) => {
  return await axios.post(GetPOstatusUri(), data);
};

export const SetStatus = async (data) => {
  return await axios.post(SetStatusUri(), {
    data: data,
    token: getCookie().token.token,
  });
};

export const SetEmailed = async (data) => {
  return await axios.post(SetEmailedDateUri(), {
    data: data,
    token: getCookie().token.token,
  });
};

export const UndoAction = async (data) => {
  return await axios.post(UndoActionUri(), {
    data: data,
    token: getCookie().token.token,
  });
};

export const UpdateDue = async (data) => {
  return await axios.post(UpdateDueUri(), {
    data: data,
    token: getCookie().token.token,
  });
};

export const SetDeliveredDate = async (data) => {
  return await axios.post(SetDeliveredDateURI(), {
    data: data,
    token: getCookie().token.token,
  });
};

export const Applytoall = async (data) => {
  return await axios.post(ApplytoallUri(), {
    data: data,
    token: getCookie().token.token,
  });
};

export const MarkComplete = async (data) => {
  return await axios.post(MarkCompleteURI(), {
    data: data,
    token: getCookie().token.token,
  });
};

export const cardCount = async (data) => {
  return await axios.post(cardCountUri(), data);
};

export const filterRecent = async (data) => {
  return await axios.post(filterRecentUri(), data);
};

export const fetchForapproval = async (data) => {
  return await axios.post(fetchForapprovalURI(), data);
};

export const approvedUndo = async (data) => {
  return await axios.post(approvedUndoURI(), {
    data: data,
    token: getCookie().token.token,
  });
};
