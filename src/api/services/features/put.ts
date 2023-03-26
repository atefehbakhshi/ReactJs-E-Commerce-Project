import { OrderI, ProductI } from "../../../type/interface";
import { instance } from "../../constants";

// edit product data by id
export const editProductDataById = (id: number, data: ProductI) =>
  instance.put(`/products/${id}`, data);

// edit user data by id
export const editUserDataById = (id: number, data: OrderI) =>
  instance.put(`/orders/${id}`, data);
