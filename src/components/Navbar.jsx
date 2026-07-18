import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'products', path: '/products' },
  { key: 'experience', path: '/experience' },
  { key: 'eventSolutions', path: '/event-solutions' },
  { key: 'gallery', path: '/gallery' },
  { key: 'videos', path: '/videos' },
  { key: 'contact', path: '/contact' },
  

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
      const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#00ff88] flex items-center justify-center font-black text-[#0a0e1a] text-lg group-hover:scale-110 transition-transform">
              PM
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-tight">PlayMotion</span>
              <span className="block text-[#00d4ff] text-xs font-semibold tracking-wider">EVENTS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {t(`nav.${link.key}`)}
                      </NavLink>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              to="/booking"
              className="hidden md:block btn-primary text-sm py-2 px-5"
            >
              {t('nav.reserve')}
                    </Link>
<LanguageSwitcher className="hidden md:block btn-secondary text-sm py-2 px-5" />
                        <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0d1221]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {t(`nav.${link.key}`)}
                      </NavLink>
            ))}
            <Link to="/booking" className="block btn-primary text-center mt-4 text-sm py-3">
              {t('nav.reserve')}
                    </Link>
                      <LanguageSwitcher className="block btn-secondary text-center mt-4 text-sm py-3" />
          </div>
        </div>
      )}
    </nav>
  )
}
