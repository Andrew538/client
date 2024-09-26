import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Header from './UI/Header/Header'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <footer>2024</footer>
    </>
   
  )
}

export default Layout