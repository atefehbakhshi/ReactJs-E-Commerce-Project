import { instance } from "../../constants";

export const loginUser = (data) => instance.post("/auth/login", data);
