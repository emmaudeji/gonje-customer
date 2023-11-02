import axios from "axios";
import authHeader from "@/components/Api/auth-header";

let baseURL = "https://backendapi.gonje.com/"

export const fetcher = (url) => {
  axios({
    method: "get",
    headers: authHeader(),
    url: baseURL + url,
  })
    .get(url)
    .then((res) => res.data);
};
