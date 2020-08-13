import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Apt5cUELb6bRpR3qGppuNEDgihU2vZRPfbhKJtATcPU",
  },
});
