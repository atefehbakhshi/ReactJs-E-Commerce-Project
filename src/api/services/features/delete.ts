import { instance } from "../../constants";

export const deleteProduct = (id) => instance.delete(`/products/${id}`);
