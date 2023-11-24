import axios from "axios";
import authHeader from "@/components/Api/auth-header";

let baseURL = "https://backendapi.gonje.com/";

export const fetcher = (url) => {
  return axios({
    method: "get",
    headers: authHeader(),
    url: baseURL + url,
  }).then((response) => response.data);
};
