import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react'
import { clsx } from 'clsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/employers', label: 'For Employers' },
  { to: '/job-seekers', label: 'For Job Seekers' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-secondary-200/50 shadow-lg shadow-secondary-900/5 py-3" 
          : "bg-white/95 backdrop-blur-xl border-b border-secondary-200/50 shadow-sm py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300">
            <Sparkles className="text-white" size={20} />
          </div>
          <span className="text-xl font-heading font-bold text-secondary-900 transition-colors duration-300">
            TalentBridge<span className="text-primary-500">AU</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => clsx(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                isActive 
                  ? "text-primary-600 bg-primary-50" 
                  : "text-secondary-600 hover:text-primary-600 hover:bg-secondary-50"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="px-4 py-2.5 rounded-xl text-sm font-semibold text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 transition-all duration-300">
            Sign in
          </button>
          <button className="btn btn-primary py-2.5 px-5 text-sm">
            Post a Role
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg text-secondary-600 hover:bg-secondary-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={clsx(
        "fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out",
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}>
        <div className={clsx(
          "absolute inset-0 bg-white/95 backdrop-blur-xl shadow-2xl transition-opacity duration-500",
          menuOpen ? "opacity-100" : "opacity-0"
        )} style={{ zIndex: 0, pointerEvents: 'none' }}></div>
        <div className={clsx(
          "absolute inset-0 pt-16 px-4 flex items-start justify-center transition-transform duration-500 z-10",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className={clsx(
            "w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-secondary-100",
            "space-y-1 relative"
          )}>
            <button
              className="absolute top-4 right-4 rounded-full p-1.5 text-secondary-500 hover:text-secondary-900 bg-secondary-100/70 hover:bg-secondary-200 transition"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={18} />
            </button>
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => clsx(
                  "block text-lg font-semibold rounded-2xl px-4 py-3 transition",
                  isActive ? "bg-primary-50 text-primary-600" : "text-secondary-700 hover:bg-secondary-50"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 gap-3 flex flex-col">
              <button className="btn btn-secondary w-full justify-center">Sign in</button>
              <button className="btn btn-primary w-full justify-center">Post a Role</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
