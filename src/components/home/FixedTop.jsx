import React, { useEffect, useState } from 'react'
import useSmoothScroll from '../../hook/useSmoothScroll'
// import './styles/FixedTop.scss' ← 이 줄 없어도 됨

const FixedTop = () => {
  const scrollTo = useSmoothScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed-top ${visible ? 'visible' : ''}`}
      onClick={() => scrollTo('Hero')}
      role="button"
      aria-label="맨 위로 이동"
    >
      ↑
    </div>
  )
}

export default FixedTop