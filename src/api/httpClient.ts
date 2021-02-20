import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 2500,
});

export default httpClient;
