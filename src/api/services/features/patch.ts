import { instance } from "../../constants";

// edit quantity of product by id
export const editPriceQuantity = (
  id: number,
  data: { quantity: number } | { price: number }
) => instance.patch(`/products/${id}`, data);
