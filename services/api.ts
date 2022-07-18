import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.TMDB_API_URL}`,
});
