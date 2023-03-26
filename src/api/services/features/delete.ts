import { instance } from "../../constants";

export const deleteProduct = (id:number) => instance.delete(`/products/${id}`);
