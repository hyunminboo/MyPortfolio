import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./styles/Roadmap.scss";

const roadmapData = [
  {
    phase: "1단계 (24~26세)",
    title: "기반 다지기",
    summary: "디지털 기술 기초 및 글로벌 역량, 자기 브랜드 구축 시작",
    details: [
      {
        category: "기술 역량",
        points: [
          "AI, 데이터 분석, 클라우드, IoT 같은 디지털 기술 기초 습득",
          "Python, SQL, React 등 핵심 프레임워크 및 언어 활용 능력 배양"
        ]
      },
      {
        category: "언어 · 글로벌 준비",
        points: [
          "영어는 기본, 제2외국어(중국어, 스페인어 등) 학습 시작",
          "해외 인턴, 교환학생, 글로벌 프로젝트 등 국제 경험 쌓기"
        ]
      },
      {
        category: "자기 브랜드 시작",
        points: [
          "블로그, 포트폴리오, 유튜브, LinkedIn 등에 전문성과 관심사 정리 및 발신"
        ]
      }
    ]
  },
  {
    phase: "2단계 (27~29세)",
    title: "전문성 심화 및 성과 창출",
    summary: "핵심 프로젝트 주도, 기술적 깊이 확보 및 네트워크 확장",
    details: [
      {
        category: "핵심 역량 강화",
        points: [
          "실무에서 주도적으로 프로젝트를 리딩하며 가시적 성과 창출",
          "프론트엔드 최적화 및 백엔드 아키텍처에 대한 전반적 이해도 상승"
        ]
      },
      {
        category: "네트워킹",
        points: [
          "사내외 기술 커뮤니티 적극 참여 및 기술 세미나 발표 경험",
          "다양한 직군의 전문가(기획, 디자인)들과의 원활한 협업 네트워킹"
        ]
      },
      {
        category: "문제 해결 능력",
        points: [
          "대규모 트래픽 처리, UI/UX 최적화 등 복잡한 비즈니스 문제 해결 경험 축적"
        ]
      }
    ]
  },
  {
    phase: "3단계 (30~32세)",
    title: "리더십 및 비즈니스 임팩트",
    summary: "팀 리딩, 기술 아키텍처 설계 및 비즈니스 성장에 기여",
    details: [
      {
        category: "테크 리더십",
        points: [
          "후배 개발자 멘토링 및 팀 기술 표준(코드 컨벤션, 리뷰 문화) 정립",
          "단위 프로젝트 매니징 및 기술 방향성 결정에 주도적 참여"
        ]
      },
      {
        category: "비즈니스 이해도",
        points: [
          "기술이 비즈니스 지표(매출, 전환율 등)에 미치는 영향 분석 능력 강화",
          "단순 개발을 넘어 프로덕트 오너십을 가지고 서비스 개선 제안"
        ]
      },
      {
        category: "영향력 확대",
        points: [
          "오픈소스 프로젝트 생태계에 유의미한 기여",
          "테크 컨퍼런스 연사 참여 및 기술 블로그 운영을 통한 대외 인지도 확보"
        ]
      }
    ]
  },
  {
    phase: "4단계 (33~34세)",
    title: "기술 비전 제시 및 아키텍트",
    summary: "조직 단위의 기술 전략 수립 및 거시적 관점의 비전 제시",
    details: [
      {
        category: "조직 관리 및 전략",
        points: [
          "개발 조직 전체의 기술 부채 관리 및 중장기 로드맵 수립",
          "효율적인 개발 문화 및 CI/CD 자동화 프로세스 고도화"
        ]
      },
      {
        category: "선구적 인사이트",
        points: [
          "최신 기술 트렌드(생성형 AI, Web3 등)를 발굴하고 선제적으로 비즈니스에 접목"
        ]
      },
      {
        category: "기술 경영(CTO) 역량",
        points: [
          "C-level과의 원활한 소통 및 경영 관점에서의 전사적 기술 비전 얼라인(Align)"
        ]
      }
    ]
  }
];

const Roadmap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      const timer = setTimeout(() => {
        const items = modalRef.current.querySelectorAll(".roadmap-item");
        items.forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.15}s`;
          el.classList.add("visible");
        });
        const line = modalRef.current.querySelector(".roadmap-line-fill");
        if (line) line.classList.add("visible");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSelectedItem(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="inner roadmap-inner">
      <div className="roadmap-header">
        <span className="section-label">VISION</span>
        <h2 className="roadmap-title">10년후 나는 무엇을 하고 있을까?</h2>
        <button className="roadmap-open-btn" onClick={() => setIsModalOpen(true)}>
          10년 성장 로드맵 보기
        </button>
      </div>

      {isModalOpen && createPortal(
        <div className="roadmap-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="roadmap-modal-content" onClick={(e) => e.stopPropagation()} ref={modalRef}>
            <button className="roadmap-close-btn" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
              &times;
            </button>
            <h3 className="modal-title">My 10-Year Vision</h3>
            <div className="roadmap-container">
              <div className="roadmap-line">
                <div className="roadmap-line-fill"></div>
              </div>
              <ul className="roadmap-list">
                {roadmapData.map((item, index) => (
                  <li className="roadmap-item" key={index} onClick={() => setSelectedItem(item)}>
                    <div className="roadmap-node">
                      <div className="node-inner"></div>
                    </div>
                    <div className="roadmap-content hoverable">
                      <div className="roadmap-age">{item.phase}</div>
                      <h3 className="roadmap-item-title">{item.title}</h3>
                      <p className="roadmap-item-desc">{item.summary}</p>
                      <span className="click-hint">자세히 보기 &rarr;</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detail Modal Overlay */}
            {selectedItem && (
              <div className="roadmap-detail-overlay" onClick={() => setSelectedItem(null)}>
                <div className="roadmap-detail-box" onClick={(e) => e.stopPropagation()}>
                  <button className="roadmap-close-btn detail-close" onClick={() => setSelectedItem(null)}>
                    &times;
                  </button>
                  <h4 className="detail-phase">{selectedItem.phase}</h4>
                  <h2 className="detail-title">{selectedItem.title}</h2>
                  <div className="detail-content">
                    {selectedItem.details.map((detail, idx) => (
                      <div key={idx} className="detail-section">
                        <h5 className="detail-category"># {detail.category}</h5>
                        <ul className="detail-points">
                          {detail.points.map((pt, pIdx) => (
                            <li key={pIdx}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Roadmap;
