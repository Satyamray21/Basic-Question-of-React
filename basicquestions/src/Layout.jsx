import React from 'react'
import Header from './compontent/Header/Header'
import { Outlet } from 'react-router'
import Footer from './compontent/Footer/Footer'

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
