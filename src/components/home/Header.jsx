import React, { useEffect, useState } from 'react'
import Nav from "./Nav"
import "./styles/Header.scss"
import { useTheme } from '../../context/ThemeContext'

const Header = () => {
  const { theme, toggleTheme, isDark } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`${scrolled ? "scroll" : ""} ${menuOpen ? "is-open" : ""}`}>
      <div className="inner">
        <h4 className="logo">
          B<span className="logo-dot"></span>M
        </h4>
        <div className="right-wrap">
          <button
            onClick={() => setMenuOpen(v => !v)}
            className='mob-nav-btn'
            aria-label="메뉴 열기"
          >
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </button>
          <Nav />
          <button
            className={`theme-btn ${isDark ? 'dark' : ''}`}
            onClick={toggleTheme}
            aria-label="테마 전환"
          />
        </div>
      </div>
    </header>
  )
}

export default Header