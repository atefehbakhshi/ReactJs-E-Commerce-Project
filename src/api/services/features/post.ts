import { FieldValues } from "react-hook-form/dist/types";
import {
  CommentsI,
  LoginI,
  OrderI,
  ProductSendToDbI,
} from "../../../type/interface";
import { instance } from "../../constants";

export const loginUser = (data: FieldValues | LoginI) =>
  instance.post("/auth/login", data);

export const uploadImage = (data: any) => instance.post("/upload", data);

export const addProduct = (data: ProductSendToDbI) =>
  instance.post("/products", data);

export const addOrder = (data: OrderI) => instance.post("/orders", data);

export const addComment = (data: { id: number; commentsList: CommentsI[] }) =>
  instance.post("/comments", data);
