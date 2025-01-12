import axios from "axios";
export const API = axios.create({
  baseURL : 'https://wp-api.codethanhthuongthua.asia/wp-json/',
  // headers: {
  //   Content-Type: "application/json",
  //   timeout : 1000,
  // }, 
});

export const TOKEN = "TOKEN";
export const token = localStorage.getItem(TOKEN);


