import { LoginI, OrderI, ProductI } from "../../../type/interface";
import { instance } from "../../constants";

export const loginUser = (data: LoginI) => instance.post("/auth/login", data);
export const uploadImage = (data: any) => instance.post("/upload", data);
export const addProduct = (data: ProductI) => instance.post("/products", data);
export const addOrder = (data: OrderI) => instance.post("/orders", data);
