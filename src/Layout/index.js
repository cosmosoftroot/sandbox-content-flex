import React from 'react'
import Menu from '../components/Menu'
import TableMUI from '../components/TableMUI'
import ContentFlex from '../components/ContentFlex'
import "./style.css"


export default function Layout() {
  return (
    <div className="container">
      <Menu />
      <ContentFlex>
        <TableMUI/>
      </ContentFlex>
      
    </div>
  )
}
