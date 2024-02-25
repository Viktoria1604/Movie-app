import React from 'react'
import './PagePagination.scss'
import { Pagination, ConfigProvider } from 'antd'
import { useState } from 'react'

interface IPageProps {
  onNewPage: (newPage: number) => void
  onPage: number
  onTotalPage: number
}
const PagePagination = ({ onNewPage, onPage, onTotalPage }: IPageProps) => {
  const onChange = (newPage: number) => {
    onNewPage(newPage)
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorPrimary: '#FFF',
            itemActiveBg: '#1890FF',
            colorPrimaryHover: '#FFF',
          },
        },
      }}
    >
      <Pagination
        className="pagePagination"
        defaultCurrent={1}
        total={onTotalPage}
        current={onPage}
        onChange={(newPage) => onChange(newPage)}
        pageSize={20}
      />
    </ConfigProvider>
  )
}
export default PagePagination
