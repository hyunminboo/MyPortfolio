import React from 'react'
import { miniWorks } from '../../utils/works'
import "./styles/MiniWork.scss"
import { Canvas } from "@react-three/fiber"
import { useTheme } from "../../context/ThemeContext"
import SunAnimation from "../animation/SunAnimation"
import GatsbyStars from "../animation/GatsbyStars"

const MiniWork = () => {
  const { theme } = useTheme();

  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.7, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 65 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          {theme === 'dark' && <GatsbyStars />}
          {theme === 'light' && <SunAnimation />}
        </Canvas>
      </div>

      <div className='inner miniwork-inner' style={{ position: 'relative', zIndex: 1 }}>
      <div className="miniwork-layout">
        <div className="miniwork-grid">
          {miniWorks.map(work => (
            <div 
              className="mini-card" 
              key={work.id}
              style={{ cursor: "pointer" }}
              onClick={() => {
                const targetLink = work.links.notion || work.links.demo || work.links.github;
                if (targetLink && targetLink !== "#") {
                  window.open(targetLink, "_blank");
                }
              }}
            >
              <img src={work.icon} alt={work.title} className="mini-icon" />
              <h4 className="mini-title">{work.title}</h4>
              <p className="mini-desc">{work.description}</p>
              <div className="mini-tags">
                {work.tags.map((t, i) => <span key={i}>{t}</span>)}
              </div>
              <div className="mini-links">
                {work.links.github && work.links.github !== "#" && (
                  <a 
                    href={work.links.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                )}
                {work.links.demo && work.links.demo !== "#" && (
                  <a 
                    href={work.links.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="miniwork-aside">
          <div className="aside-deco"></div>
          <div className="section-label">MY PROJECTS</div>
          <h2 className="aside-title">
            <span className="outline">MINI</span> WORK
          </h2>
          <p className="aside-desc">
            학습과 연습 목적으로 만든 소규모 프로젝트들입니다.<br />
            꾸준히, 작은 것부터 실력을 쌓아왔습니다.
          </p>
          <button className="btn-primary">미니 프로젝트 보러가기</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default MiniWork