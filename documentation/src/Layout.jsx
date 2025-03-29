import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet, useLocation} from 'react-router-dom'

function Layout() {


  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/';

  return (
    <>
    {!hideHeaderFooter && <Header />}
    <Outlet/>
    {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default Layout