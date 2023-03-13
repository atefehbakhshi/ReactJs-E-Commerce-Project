import { instance } from "../../constants";

// edit product data by id
export const editProductDataById = (id: number, data) =>
  instance.put(`/products/${id}`, data);

// edit user data by id
export const editUserDataById = (id: number, data) =>
  instance.put(`/orders/${id}`, data);
