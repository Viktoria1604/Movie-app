import React from 'react'
import '../SearchPanel/SearchPanel'
import SearchPanel from '../SearchPanel/SearchPanel'
import MovieList from '../MovieList/MovieList'
import PagePagination from '../PagePagination/PagePagination'
import { onSearch } from '../../../src/api'
import { useState, useEffect } from 'react'
import { IGettedMovies, IMovie } from '../../types/types'
import { Spin, Alert } from 'antd'
import { debounce } from 'lodash'

import './SearchTab.scss'

const defaultResults = {
  results: [],
  total_pages: 0,
  total_results: 0,
}

const SearchTab = () => {
  const [searchResponse, setSearchResponse] = useState<IGettedMovies>(defaultResults)
  const [inputText, setInputText] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const ratedMovies = JSON.parse(localStorage.getItem('movies') || '[]')

  let render = loading ? (
    <Spin size="large" />
  ) : (
    <MovieList
      cardContent={searchResponse.results.map((movie: IMovie) => {
        const ratedMovie = ratedMovies.findIndex((rated: IMovie) => rated.id === movie.id)
        return ratedMovie < 0 ? movie : ratedMovies[ratedMovie]
      })}
    />
  )
  const isAlert = alert ? (
    <Alert message="Something goes wrong..." description="You shouldn't indulge with your requests <3" type="error" />
  ) : (
    render
  )
  const emptyResponse =
    searchResponse.results.length < 1 ? (
      <div className="emptyRespose">We havent found the results yet, write a new request =＾● ⋏ ●＾=</div>
    ) : null
  const fetchData = async () => {
    try {
      if (inputText.trim() !== '') {
        setLoading(true)
        const response = await onSearch(inputText, page)
        setSearchResponse(response)
        setLoading(false)
      } else {
        setSearchResponse(defaultResults)
      }
    } catch (err) {
      setLoading(false)
      setAlert(true)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [inputText, page])

  return (
    <div className="mainList">
      <SearchPanel onInput={debounce((text: string) => setInputText(text), 800)} />
      {emptyResponse}
      <div className="expander"> {isAlert} </div>
      <PagePagination
        onNewPage={(newPage: number) => setPage(newPage)}
        onPage={page}
        onTotalPage={searchResponse.total_results}
      />
    </div>
  )
}

export default SearchTab
