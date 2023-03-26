import axios from "axios";

export const baseURL = "http://localhost:3002";

let sent = false;

export const instance = axios.create({
  baseURL,
  timeout: 80000,
});

instance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("token");
    if (authToken !== undefined) {
      config.headers.token = authToken;
      config.timeout = 800000;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      response: { status },
      config,
    } = error;

    if (status === 401 && config.url !== "/auth/refresh-token" && !sent) {
      sent = true;
      localStorage.removeItem("token");
      instance.defaults.headers.refreshToken =
        localStorage.getItem("refresh_token");
      instance.post("/auth/refresh-token").then(({ data }) => {
        const { accessToken } = data;
        localStorage.setItem("token", accessToken);
        window.location.reload();
      });
    } else if (config.url === "/auth/refresh-token") {
      localStorage.removeItem("refresh_token");
      window.location.href = "/admin/login";
    } else {
      return Promise.reject(error);
    }
  }
);
