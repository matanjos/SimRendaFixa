import axios from "axios";
export default axios.create({
  //baseURL: "http://localhost:3000",
  baseURL: "https://sim-renda-fixa.herokuapp.com",
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
  }
});