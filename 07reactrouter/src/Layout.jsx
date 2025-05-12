import React from 'react'
import Home from './components/Home/Home'
// import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// import Header from './components/Header/header'
import{Header,Footer} from './index.js'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout