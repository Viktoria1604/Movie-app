import React, { useContext } from 'react'
import './MovieList.scss'
import MovieCard from '../MovieCard/MovieCard'
import { IMovie } from '../../types/types'
import { AppContext } from '../../Context/AppContext'

interface IMovieListProps {
  cardContent: IMovie[]
}

const MovieList = ({ cardContent }: IMovieListProps) => {
  const { onRatingClick } = useContext(AppContext)

  return (
    <>
      <ul className="movieList">
        {cardContent.map((item: IMovie) => {
          return (
            <MovieCard
              key={Math.random().toString(36).slice(2)}
              {...item}
              onRated={(rate: number) => onRatingClick(item, rate)}
            />
          )
        })}
      </ul>
    </>
  )
}
export default MovieList
