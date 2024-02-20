import axios from "axios";
import { IGettedMovies, IMovie} from "./types/types";

const link = "https://api.themoviedb.org/3/";
const key = "33a13f5e8dd894baadd6f3b9cd55d8fc";


const onSearch = async (query:string): Promise<IGettedMovies> => {
  const response = await axios.get(
    `${link}search/movie?api_key=${key}&include_adult=false&query=${query}`
  );
  return(response.data);
};



export { onSearch };
