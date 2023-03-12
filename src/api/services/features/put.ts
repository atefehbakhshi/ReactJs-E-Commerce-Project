import { instance } from "../../constants";

// edit user data by id
export const editUserDataById = (id: number, data) =>
  instance.put(`/orders/${id}`, data);
