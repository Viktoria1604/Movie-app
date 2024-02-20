import React from 'react';
import './PagePagination.scss';
import { Pagination, ConfigProvider } from 'antd';


const PagePagination =() =>{

    return(

<ConfigProvider
  theme={{
    components: {
      Pagination: {
        colorPrimary:'#FFF',
        itemActiveBg: '#1890FF',
        colorPrimaryHover: '#FFF'
     
      },
    },
  }}
>
<Pagination className = 'pagePagination' defaultCurrent={1} total={50} />
</ConfigProvider>
    )
}
export default PagePagination;