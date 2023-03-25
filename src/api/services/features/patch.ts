import { instance } from "../../constants";

// edit quantity of product by id
export const editQuantity = (id: number, data:{quantity:number}) =>
  instance.patch(`/products/${id}`, data);
