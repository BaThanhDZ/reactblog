import axios from "axios";
const API = {
  call() {
    return axios.create({
      baseURL: "https://wp-api.codethanhthuongthua.asia/wp-json/",
    });
  },
  callWithToken() {},
};

export default API;
