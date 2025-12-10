import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'
import useScrollInteractions from '../hooks/useScrollInteractions'

const interactiveTags = new Set(['button', 'a', 'input', 'textarea', 'select', 'label'])
const textSelector = 'p, span, h1, h2, h3, h4, h5, h6, li, strong, em, small'

const Layout = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [location.pathname])
  useScrollInteractions(location.pathname)

  useEffect(() => {
    const cursor = document.getElementById('magic-cursor')
    if (!cursor) return

    const handleMove = (event) => {
      const { clientX, clientY } = event
      cursor.style.top = `${clientY}px`
      cursor.style.left = `${clientX}px`

      const hovered = document.elementFromPoint(clientX, clientY)
      if (!hovered) {
        cursor.classList.add('is-hidden')
        return
      }

      const tagName = hovered.tagName.toLowerCase()
      const isInteractive = interactiveTags.has(tagName) || hovered.closest('[data-cursor-interactive]')
      const isText = hovered.matches(textSelector) || Boolean(hovered.closest(textSelector))

      if (isText && !isInteractive) {
        cursor.classList.add('is-hidden')
      } else {
        cursor.classList.remove('is-hidden')
      }

      if (isInteractive) {
        cursor.classList.add('is-active')
      } else {
        cursor.classList.remove('is-active')
      }
    }

    const handleLeave = () => cursor.classList.add('is-hidden')
    const handleEnter = () => cursor.classList.remove('is-hidden')

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-secondary-50">
      <div id="magic-cursor" className="magic-cursor" aria-hidden="true"></div>
      <Topbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
