import axios from "axios";
import { IGettedMovies, IGettedGenres } from "./types/types";

const link = "https://api.themoviedb.org/3/";
const key = "33a13f5e8dd894baadd6f3b9cd55d8fc";

const onSearch = async (query: string, page:number): Promise<IGettedMovies> => {
  const response = await axios.get(
    `${link}search/movie?api_key=${key}&include_adult=false&query=${query}&page=${page}`
  );
  return response.data;
};

const onGenres = async (): Promise<IGettedGenres> => {
  const genreResponse = await axios.get(
    `${link}genre/movie/list?language=en&api_key=${key}`
  );
  return genreResponse.data};

export { onSearch, onGenres };
