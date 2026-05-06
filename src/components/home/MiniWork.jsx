import React from 'react'
import { miniWorks } from '../../utils/works'
import "./styles/MiniWork.scss"

const MiniWork = () => {
  return (
    <div className='inner miniwork-inner'>
      <div className="miniwork-layout">
        <div className="miniwork-grid">
          {miniWorks.map(work => (
            <div className="mini-card" key={work.id}>
              <img src={work.icon} alt={work.title} className="mini-icon" />
              <h4 className="mini-title">{work.title}</h4>
              <p className="mini-desc">{work.description}</p>
              <div className="mini-tags">
                {work.tags.map((t, i) => <span key={i}>{t}</span>)}
              </div>
              <div className="mini-links">
                <a href={work.links.github}>GitHub</a>
                <a href={work.links.demo}>Demo</a>
              </div>
            </div>
          ))}
        </div>

        <div className="miniwork-aside">
          <div className="section-label">MY PROJECTS</div>
          <h2 className="aside-title">
            미니<br />
            <span className="primary">프로젝트</span>
          </h2>
          <p className="aside-desc">
            학습과 연습 목적으로 만든 소규모 프로젝트들입니다.<br />
            꾸준히, 작은 것부터 실력을 쌓아왔습니다.
          </p>
          <button className="btn-primary">포트폴리오 보러가기</button>
          <div className="aside-deco"></div>
        </div>
      </div>
    </div>
  )
}

export default MiniWork