import axios from "axios";

export default axios.create({
  baseURL: "https://express-meteo-app.vercel.app/",
});
