import { instance } from "../../constants";

export const loginUser = (data) => instance.post("/auth/login", data);
export const uploadImage = (data) => instance.post("/upload", data);
export const addProduct = (data) => instance.post("/products", data);
