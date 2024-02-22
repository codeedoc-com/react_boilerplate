import api from "./api";

const auth = {
  login: () => api.post("/login"),
};

export { auth };
