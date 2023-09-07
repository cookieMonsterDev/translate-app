import axios from "axios";

const Api = axios.create({
  baseURL: "https://google-translate1.p.rapidapi.com/language/translate/v2/",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY || "",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  },
});

export default Api