import {
  OrderI,
  ProductGetFromDbI,
  ProductSendToDbI,
} from "../../../type/interface";
import { instance } from "../../constants";

// edit product data by id
export const editProductDataById = (
  id: number,
  data: ProductGetFromDbI | ProductSendToDbI
) => instance.put(`/products/${id}`, data);

// edit user data by id
export const editUserDataById = (id: number, data: OrderI) =>
  instance.put(`/orders/${id}`, data);
