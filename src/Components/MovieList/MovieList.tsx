import React from "react";
import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
import { IMovie } from "../../types/types";

interface IMovieListProps {
    cardContent: IMovie[]
}

const MovieList = ({ cardContent }: IMovieListProps) => {
  return (
    <>
      <ul className="movieList">
        {cardContent.map((item:IMovie) => {
          const { id } = item;
          return <MovieCard key={id} {...item} />;
        })}
      </ul>
    </>
  );
};
export default MovieList;
