import { CommentsI } from "../../../type/interface";
import { instance } from "../../constants";

// edit quantity of product by id
export const editPriceQuantity = (
  id: number,
  data: { quantity: number } | { price: number }
) => instance.patch(`/products/${id}`, data);

// add comment to data base if the product has more than one comment
export const editCommentsById = (
  id: number,
  data: { commentsList: CommentsI[] }
) => instance.patch(`/comments/${id}`, data);
