import axios from "axios";

export default axios.create({
  baseURL: process.env.SERVER_API_URI,

  headers: {
    "Content-type": "application/json",
  },
});
