import React from 'react'
import useSmoothScroll from '../../hook/useSmoothScroll'

const navLinks = [
  { id: 'Hero', label: '소개' },
  { id: 'Aboutme', label: '기술' },
  { id: 'MiniWork', label: '프로젝트' },
  { id: 'Work', label: '연락' },
]

const Nav = () => {
  const scrollTo = useSmoothScroll()
  return (
    <nav>
      <ul>
        {navLinks.map((nav, i) => (
          <li key={i}>
            <a
              onClick={(e) => {
                e.preventDefault()
                scrollTo(nav.id)
              }}
              href={`#${nav.id}`}
            >
              {nav.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
