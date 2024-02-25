import React from 'react'
import './FilterPanel.scss'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import SearchTab from '../SearchTab/SearchTab'
import RatedTab from '../RatedTab/RatedTab'
import { IMovie } from '../../types/types'

interface IFilterProps {
  ratedMovies: IMovie[]
}

const FilterPanel = ({ ratedMovies }: IFilterProps) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Search',
      children: <SearchTab />,
    },
    {
      key: '2',
      label: 'Rated',
      children: <RatedTab ratedMovies={ratedMovies} />,
    },
  ]

  return <Tabs className="filterPanel" defaultActiveKey="1" items={items} />
}
export default FilterPanel
