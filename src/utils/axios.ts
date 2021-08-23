import Axios from "axios";
import { getTokenInfo } from "./helper";

const api = Axios.create({
  baseURL: process.env.REACT_APP_VERIFRICA_BASE_URL,
  timeout: 80000,
  headers: {
    "Content-Type": "application/json",
    // "Accept": "application/json",
    // "Content-Type": "multipart/form-data",
  },
});

api.defaults.headers.common["Authorization"]= `Bearer ${getTokenInfo().token as string}` || null;

export { api };
