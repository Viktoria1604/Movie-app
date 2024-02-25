import React from 'react'
import '../SearchPanel/SearchPanel'
import { IMovie } from '../../types/types'
import MovieList from '../MovieList/MovieList'

interface IRatedTabProps {
  ratedMovies: IMovie[]
}

const RatedTab = ({ ratedMovies }: IRatedTabProps) => {
  return (
    <>
      <MovieList cardContent={ratedMovies} />
    </>
  )
}

export default RatedTab
