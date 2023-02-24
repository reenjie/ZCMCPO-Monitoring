import { FetchPurchaseOrderUri, FetchAdvanceSortSCUUri } from "../../uri";
import axios from "axios";

export const FetchPurchaseOrder = async (data) => {
  return await axios.post(FetchPurchaseOrderUri(), data);
};

export const FetchAdvanceSortSCU = async (data) => {
  return await axios.post(FetchAdvanceSortSCUUri(), data);
};
