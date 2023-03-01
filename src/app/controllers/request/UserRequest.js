import {
  FetchPurchaseOrderUri,
  FetchAdvanceSortSCUUri,
  SetNewtoViewedUri,
  FetchRecentUri,
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
