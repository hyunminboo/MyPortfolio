import React from 'react'
import "./styles/Hero.scss"
import useSmoothScroll from '../../hook/useSmoothScroll'

const Hero = () => {
  const scrollTo = useSmoothScroll()
  return (
    <div className='inner hero-inner'>
      {/* 배경 장식 */}
      <div className="hero-bg-circle c1"></div>
      <div className="hero-bg-circle c2"></div>
      <div className="hero-bg-circle outline1"></div>
      <div className="hero-bg-circle outline2"></div>

      <p className="hero-sub">안녕하세요, 저는</p>
      <h1 className="tit">
        <span className="en">Full-Stack</span>
        <span className="en green">Developer</span>
        <span className="ko">부현민 입니다.</span>
      </h1>

      <p className="hero-desc">
        이 페이지는 저를 소개하는 포트폴리오 웹사이트입니다.<br />
        프론트엔드부터 백엔드까지 사용자 중심의 서비스를 직접 설계하고 개발합니다.<br />
        코드로 아이디어를 현실로 만드는 과정을 즐깁니다.
      </p>

      <div className="hero-cta">
        <button
          className="btn-primary"
          onClick={() => scrollTo('Work')}
        >
          포트폴리오 보기 ↓
        </button>
        <button
          className="btn-outline"
          onClick={() => scrollTo('Contact')}
        >
          연락하기
        </button>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  )
}

export default Hero
