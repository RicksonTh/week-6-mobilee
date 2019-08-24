import axios from "axios";

const api = axios.create({
  baseURL: "https://week-6-b.herokuapp.com"
});

export default api;
