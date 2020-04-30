import axios from "axios";

const Api = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
  timeout: 5000,
});

Api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
