import React from 'react'
import './SearchPanel.scss'

interface ISearchProps {
  onInput: (text: string) => void
}

const SearchPanel = ({ onInput }: ISearchProps) => {
  return (
    <form className="searchPanel" onSubmit={(e) => e.preventDefault()}>
      <input
        className="searchPanel__form"
        placeholder="Type to search..."
        autoFocus
        onChange={(e) => onInput(e.target.value)}
      />
    </form>
  )
}

export default SearchPanel
