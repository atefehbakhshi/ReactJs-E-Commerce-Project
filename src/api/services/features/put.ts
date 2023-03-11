import { instance } from "../../constants";

// edit user data by id
export const putUserDataById = (id: number, data, headers) =>
  instance.patch(`/orders/${id}`, data, { headers: headers });
