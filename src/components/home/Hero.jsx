import React from "react";
import "./styles/Hero.scss";
import useSmoothScroll from "../../hook/useSmoothScroll";

const HeroCircleGraph = () => {
  const cx = 500;
  const cy = 500;
  const r = 460;

  const toRad = (d) => (d * Math.PI) / 180;
  const arcPath = (startDeg, endDeg) => {
    const x1 = cx + r * Math.cos(toRad(startDeg));
    const y1 = cy + r * Math.sin(toRad(startDeg));
    const x2 = cx + r * Math.cos(toRad(endDeg));
    const y2 = cy + r * Math.sin(toRad(endDeg));
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
  };

  return (
    <svg
      className="hero-svg-circle"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* 쐐기 그라디언트 — 경계에서 자연스럽게 어두워짐 */}
        <linearGradient id="wedgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#040a06" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#040a06" stopOpacity="0.1" />
        </linearGradient>

        <clipPath id="circleClip">
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
      </defs>

      {/* 베이스 원 */}
      <circle cx={cx} cy={cy} r={r} fill="#0e1c13" />

      {/* 자연스럽게 어두워지는 쐐기 */}
      <path
        d={arcPath(130, 215)}
        fill="url(#wedgeGrad)"
        clipPath="url(#circleClip)"
      />
    </svg>
  );
};

const Hero = () => {
  const scrollTo = useSmoothScroll();
  return (
    <div className="inner hero-inner">
      <HeroCircleGraph />

      <p className="hero-sub">안녕하세요, 저는</p>
      <h1 className="tit">
        <span className="en">Full-Stack</span>
        <span className="en green">Developer</span>
        <span className="ko">부현민 입니다.</span>
      </h1>

      <p className="hero-desc">
        이 페이지는 저를 소개하는 포트폴리오 웹사이트입니다.
        <br />
        프론트엔드부터 백엔드까지 사용자 중심의 서비스를 직접 설계하고
        개발합니다.
        <br />
        코드로 아이디어를 현실로 만드는 과정을 즐깁니다.
      </p>

      <div className="hero-cta">
        <button className="btn-primary" onClick={() => scrollTo("Work")}>
          포트폴리오 보기 ↓
        </button>
        <button className="btn-outline" onClick={() => scrollTo("Contact")}>
          연락하기
        </button>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
};

export default Hero;
