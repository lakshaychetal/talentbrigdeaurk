import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'
import useScrollInteractions from '../hooks/useScrollInteractions'

const Layout = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [location.pathname])
  useScrollInteractions(location.pathname)

  return (
    <div className="min-h-screen flex flex-col bg-secondary-50">
      <Topbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
