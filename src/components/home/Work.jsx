import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import works from "../../utils/works";
import "./styles/Work.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "../../context/ThemeContext";
import SunAnimation from "../animation/SunAnimation";
import GatsbyStars from "../animation/GatsbyStars";
import { getTechIcon } from "../../utils/getTechIcon";

const Work = () => {
  const { theme } = useTheme();
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedWork]);

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

      <div className="inner work-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="work-header">
          <div className="work-title-group">
            <div className="section-label">MY PROJECTS</div>
            <h2>
              <span className="outline">CORE</span> PROJECTS
            </h2>

            <div className="work-header-desc">
              <p>
                설계부터 배포까지 깊이 관여한 규모 있는 핵심 프로젝트들입니다.
                <br />
                복잡한 문제 해결과 성능 최적화에 대한 고민을 담았습니다.
              </p>
            </div>
          </div>
        </div>

        <ul className="work-lst">
          {works.map((work, idx) => (
            <li 
              key={work.id} 
              className="work-item"
              onClick={() => setSelectedWork(work)}
              style={{ cursor: "pointer" }}
            >
              <div className="lst-t-wrap">
                <span className="work-num">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h4 className="lst-tit">{work.title}</h4>
                <p className="lst-dsc">{work.description}</p>
                <div className="tags">
                  {work.tags.map((t, i) => (
                    <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      {getTechIcon(t)}
                      {t}
                    </span>
                  ))}
                </div>
                <div className="work-links">
                  {work.links.github && work.links.github !== "#" && (
                    <a
                      href={work.links.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="link-btn"
                    >
                      <FaGithub size={18} /> GitHub
                    </a>
                  )}
                  {work.links.notion && work.links.notion !== "#" && (
                    <a
                      href={work.links.notion}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="link-btn"
                    >
                      <SiNotion size={18} /> Notion
                    </a>
                  )}
                  {work.links.demo && work.links.demo !== "#" && (
                    <a 
                      href={work.links.demo} 
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="link-btn"
                    >
                      <FaExternalLinkAlt size={16} /> Live Demo
                    </a>
                  )}
                </div>
                <span className="click-hint-work">자세히 보기 &rarr;</span>
              </div>
              
              {/* Removed <a> tag to prevent redirection when clicking image */}
              <div className="lst-img-wrap">
                <div
                  className="bg"
                  style={{ backgroundImage: `url(${work.thumbnail})` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>

        <div className="work-more">
          <a href="#">+ 더 많은 프로젝트 보기</a>
        </div>
      </div>

      {/* Detail Modal Overlay for Roles */}
      {selectedWork && createPortal(
        <div className="work-modal-overlay" onClick={() => setSelectedWork(null)}>
          <div className="work-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="work-close-btn" onClick={() => setSelectedWork(null)}>
              &times;
            </button>
            
            {/* Modal Cover Image */}
            <div 
              className="modal-cover" 
              style={{ backgroundImage: `url(${selectedWork.thumbnail})` }}
            >
              <div className="modal-cover-overlay"></div>
            </div>

            <div className="modal-inner-content">
              <div className="modal-header">
                <span className="modal-label">PROJECT OVERVIEW</span>
                <h2 className="modal-title">{selectedWork.title}</h2>
                <div className="modal-meta">
                  {selectedWork.period && <div className="meta-item"><span className="meta-label">기간</span> {selectedWork.period}</div>}
                  {selectedWork.team && <div className="meta-item"><span className="meta-label">팀 구성</span> {selectedWork.team}</div>}
                  {selectedWork.myRole && <div className="meta-item"><span className="meta-label">내 역할</span> <strong>{selectedWork.myRole}</strong></div>}
                </div>
                <div className="modal-tags">
                  {selectedWork.tags.map((t, i) => (
                    <span key={i}>{getTechIcon(t)} {t}</span>
                  ))}
                </div>
                <p className="modal-desc">{selectedWork.description}</p>
              </div>
              
              <div className="modal-body">
                {/* Features Section */}
                {selectedWork.features && selectedWork.features.length > 0 && (
                  <div className="detail-section">
                    <h3 className="section-title">주요 기능 및 구현 내용</h3>
                    <div className="feature-grid">
                      {selectedWork.features.map((feat, idx) => (
                        <div key={idx} className="feature-card">
                          <h4 className="feature-title">{feat.title}</h4>
                          <p className="feature-desc">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Troubleshooting Section */}
                {selectedWork.troubleshooting && selectedWork.troubleshooting.length > 0 && (
                  <div className="detail-section">
                    <h3 className="section-title">트러블슈팅 및 문제 해결</h3>
                    <div className="trouble-list">
                      {selectedWork.troubleshooting.map((issue, idx) => (
                        <div key={idx} className="trouble-item">
                          <h4 className="trouble-q"><span>Q.</span> {issue.title}</h4>
                          <p className="trouble-a"><span>A.</span> {issue.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                {selectedWork.links.github && selectedWork.links.github !== "#" && (
                    <button 
                      className="modal-sub-btn"
                      onClick={() => window.open(selectedWork.links.github, "_blank")}
                    >
                      <FaGithub /> GitHub
                    </button>
                )}
                {selectedWork.links.notion && selectedWork.links.notion !== "#" && (
                    <button 
                      className="modal-sub-btn"
                      onClick={() => window.open(selectedWork.links.notion, "_blank")}
                    >
                      <SiNotion /> Notion 상세
                    </button>
                )}
                {selectedWork.links.demo && selectedWork.links.demo !== "#" && (
                    <button 
                      className="modal-demo-btn"
                      onClick={() => window.open(selectedWork.links.demo, "_blank")}
                    >
                      <FaExternalLinkAlt /> 라이브 데모 보러가기
                    </button>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Work;
