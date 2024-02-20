import React from 'react';
import './App.scss';
import '../SearchPanel/SearchPanel'
import SearchPanel from '../SearchPanel/SearchPanel';
import FilterPanel from '../FilterPanel/FilterPanel'
import MovieList from '../MovieList/MovieList';
import PagePagination from '../PagePagination/PagePagination';
import { onSearch } from "../../../src/api";
import { useState, useEffect } from "react";
import { IGettedMovies } from '../../types/types';

const defaultResults = {
  results: [],
  total_pages: 0,
  total_results: 0,
}

const App = () => {
  const [searchResponse, setSearchResponse] = useState<IGettedMovies>(defaultResults);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (inputText.trim() !== "") {
        const response = await onSearch(inputText);
        setSearchResponse(response);
        console.log(searchResponse)
      } else {
        setSearchResponse(defaultResults);
      }
    };

    fetchData();
  }, [inputText]);

  return (
   <section className = "background">
    <FilterPanel/>
   <SearchPanel onInput={(text:string) => setInputText(text)}  />
    <MovieList cardContent={searchResponse.results}/>
    <PagePagination/>
   </section>
  );
}

export default App;
