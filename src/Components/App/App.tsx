import React from 'react'
import './App.scss'
import FilterPanel from '../FilterPanel/FilterPanel'
import { useState, useEffect } from 'react'
import { AppProvider } from '../../Context/AppContext'
import { IGenres, IMovie } from '../../types/types'
import { onGenres } from '../../api'

const App = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState<IGenres[]>([])

  const onRatingClick = (item: IMovie, rate: number) => {
    let arrmovies = localStorage.getItem('movies')
    let moviesArray: IMovie[] = arrmovies ? JSON.parse(arrmovies) : []
    item.myrate = rate
    const ratedMovie = moviesArray.findIndex((rated: IMovie) => rated.id === item.id)
    ratedMovie < 0 ? moviesArray.push(item) : (moviesArray[ratedMovie].myrate = rate)
    localStorage.setItem('movies', JSON.stringify(moviesArray))
    setMovies(JSON.parse(localStorage.getItem('movies') || '[]'))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreResponse = await onGenres()
        setGenres(genreResponse.genres)
      } catch (error) {
        console.error('something goes wrong:', error)
      }
    }

    fetchData()
    setMovies(JSON.parse(localStorage.getItem('movies') || '[]'))
  }, [])

  const providerValue = {
    onRatingClick,
    genres,
  }

  return (
    <AppProvider value={providerValue}>
      <section className="background">
        <FilterPanel ratedMovies={movies} />
      </section>
    </AppProvider>
  )
}
export default App
