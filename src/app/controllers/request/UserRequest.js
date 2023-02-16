import { FetchPurchaseOrderUri } from "../../uri";
import axios from "axios";

export const FetchPurchaseOrder = async (data) => {
  return await axios.post(FetchPurchaseOrderUri(), data);
};
