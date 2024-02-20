import React from 'react';
import './FilterPanel.scss';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';


const FilterPanel = () =>{
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Search',
        },
        {
          key: '2',
          label: 'Rated',
        }
    ]

    return(
        <Tabs className='filterPanel' defaultActiveKey="1" items={items}/>
    )
}
export default FilterPanel