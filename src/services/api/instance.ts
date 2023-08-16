import axios from "axios";

const instance = axios.create({
  baseURL: "https://loteriascaixa-api.herokuapp.com/api",
});

export default instance;
