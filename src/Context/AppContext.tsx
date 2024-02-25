import React from 'react'
import { IMovie, IGenres } from '../types/types'

interface IContextProps {
  onRatingClick: (item: IMovie, rate: number) => void
  genres: IGenres[]
}

const AppContext = React.createContext<IContextProps>({
  onRatingClick: () => {},
  genres: [],
})
const { Provider: AppProvider } = AppContext

export { AppProvider, AppContext }
