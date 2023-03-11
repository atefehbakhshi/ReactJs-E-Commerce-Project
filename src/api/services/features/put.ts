import { instance } from "../../constants";

// edit user data by id
export const putUserDataById = (id: number, data) =>
  instance.put(`/orders/${id}`, data);
