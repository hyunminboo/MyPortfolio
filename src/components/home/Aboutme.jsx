import React, { useEffect, useRef } from 'react'
import "./styles/Aboutme.scss"
import aboutMe from '../../utils/aboutme'
import { Canvas } from "@react-three/fiber"
import { useTheme } from "../../context/ThemeContext"
import { getTechIcon } from "../../utils/getTechIcon"
import SunAnimation from "../animation/SunAnimation"
import GatsbyStars from "../animation/GatsbyStars"

const Aboutme = () => {
  const { skills, stats, tools } = aboutMe
  const { theme } = useTheme()
  const barsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.fill')
            fills.forEach(fill => {
              fill.style.width = fill.dataset.width
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (barsRef.current) observer.observe(barsRef.current)
    return () => observer.disconnect()
  }, [])

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

      <div className='inner aboutme-inner' ref={barsRef} style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-header">
        <div className="section-label">MY SKILLS</div>
        <h2 className="about-title">
          <span className="outline">Tech</span>{' '}
          <span>Stack</span>
        </h2>
        <p style={{ marginTop: '1.6rem', fontSize: '1.4rem', color: 'var(--gray600)', maxWidth: '50rem' }}>
          실무에서 다양한 프로젝트를 진행하며 다음과 같은 기술 스택을 주로 활용합니다.
          프론트엔드와 백엔드를 아우르는 풀스택 개발을 지향합니다.
        </p>
      </div>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-category">
          <span className="cat-label">Frontend</span>
          {skills.frontend.map((s, i) => (
            <div className="skill-item" key={i}>
              <div className="skill-info">
                <span className="skill-name" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                  {getTechIcon(s.name)}
                  {s.name}
                </span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="fill" style={{ width: 0 }} data-width={`${s.level}%`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Backend */}
        <div className="skill-category">
          <span className="cat-label">Backend</span>
          {skills.backend.map((s, i) => (
            <div className="skill-item" key={i}>
              <div className="skill-info">
                <span className="skill-name" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                  {getTechIcon(s.name)}
                  {s.name}
                </span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="fill" style={{ width: 0 }} data-width={`${s.level}%`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* DevOps */}
        <div className="skill-category">
          <span className="cat-label">DevOps</span>
          {skills.devops.map((s, i) => (
            <div className="skill-item" key={i}>
              <div className="skill-info">
                <span className="skill-name" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                  {getTechIcon(s.name)}
                  {s.name}
                </span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="fill" style={{ width: 0 }} data-width={`${s.level}%`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="tools-section">
        <p className="tools-label">Tools &amp; Etc</p>
        <div className="tools-list">
          {tools.map((t, i) => (
            <span className="tool-chip" key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
              {getTechIcon(t)}
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-val">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Aboutme
