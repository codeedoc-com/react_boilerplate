import Axios from "axios";

export const baseURL = process.env.REACT_APP_API_URL || "";

const api = Axios.create({ baseURL });

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error ?? "Something Went Wrong")
);

api.interceptors.response.use(
  (response) => {
    if (response?.status === 201 || response?.status === 200) {
      return response.data;
    } else if (response?.status === 204) {
      return Promise.reject("");
    } else {
      return Promise.reject(response ?? "Something Went Wrong");
    }
  },
  (error) => {
    if (error?.response?.status > 400) {
      if (error?.response?.status === 401) {
        localStorage.setItem("token", "");
        window.location.reload();
      }
      return Promise.reject("Authorization Error");
    }

    return Promise.reject(
      error?.response?.data?.message ||
        error?.toString() ||
        "Something Went Wrong"
    );
  }
);

export default api;
