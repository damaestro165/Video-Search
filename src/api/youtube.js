import axios from "axios";

const KEY = "AIzaSyDeQQyxuz44XWy2zgE8x00M8Q5QxdnuOvY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",

    maxResults: 5,
    key: KEY,
  },
});
