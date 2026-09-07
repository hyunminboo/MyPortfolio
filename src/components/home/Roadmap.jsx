import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./styles/Roadmap.scss";

const roadmapData = [
  {
    phase: "1단계 (24~26세)",
    title: "프론트엔드 스페셜리스트 도약",
    summary: "React 생태계 마스터 및 웹 성능 최적화 등 프론트엔드 핵심 역량 완성",
    details: [
      {
        category: "프론트엔드 전문성",
        points: [
          "React, TypeScript, Next.js 등 모던 웹 생태계 완벽 마스터",
          "렌더링 최적화(LCP, CLS 등) 및 클린 코드, 디자인 패턴 적용"
        ]
      },
      {
        category: "백엔드 및 인프라 기초",
        points: [
          "Node.js 활용 API 서버 구축 및 RESTful / GraphQL 통신 깊은 이해",
          "AWS, Vercel 등을 활용한 자동화된 배포 파이프라인(CI/CD) 구축 경험"
        ]
      },
      {
        category: "브랜딩 및 커뮤니티",
        points: [
          "기술 블로그 지속적 운영 및 사이드 프로젝트 기획/배포",
          "관심 있는 오픈소스 레포지토리에 첫 기여 시작"
        ]
      }
    ]
  },
  {
    phase: "2단계 (27~29세)",
    title: "아키텍처 설계 및 프로젝트 리딩",
    summary: "확장성 있는 아키텍처 설계 및 시니어로서 핵심 프로젝트 주도",
    details: [
      {
        category: "아키텍처 및 시스템 설계",
        points: [
          "디자인 시스템 구축 및 모노레포 기반의 확장성 있는 프로젝트 아키텍처 설계",
          "복잡한 전역 상태 관리 및 마이크로 프론트엔드(MFE) 도입 경험"
        ]
      },
      {
        category: "UI/UX 고도화",
        points: [
          "Three.js, WebGL을 활용한 화려하고 정교한 인터랙션 구현",
          "웹 접근성(a11y) 완벽 준수 및 사용자 경험 중심의 UI 개발"
        ]
      },
      {
        category: "프로젝트 리딩",
        points: [
          "주도적인 코드 리뷰와 후배 개발자 멘토링을 통한 팀 내 기술 수준 향상",
          "핵심 서비스 런칭 및 대규모 트래픽 대비 성능 튜닝 주도"
        ]
      }
    ]
  },
  {
    phase: "3단계 (30~32세)",
    title: "테크 리드 및 비즈니스 임팩트",
    summary: "비즈니스 지표를 견인하는 기술 의사결정 및 풀스택 역량 확장",
    details: [
      {
        category: "비즈니스 - 기술 연계",
        points: [
          "기술적 의사결정이 전환율, 체류시간 등 비즈니스 지표에 미치는 영향 분석",
          "프로덕트 오너(PO) 관점으로 기획/디자인 부서와 협업하여 서비스 개선"
        ]
      },
      {
        category: "풀스택 및 클라우드 인프라",
        points: [
          "프론트엔드를 넘어 백엔드, DB 설계, Docker/K8s 클라우드 인프라까지 역량 확장",
          "마이크로서비스 아키텍처(MSA) 환경에서의 성능 및 보안 최적화"
        ]
      },
      {
        category: "영향력 확대",
        points: [
          "주요 테크 컨퍼런스(FEConf 등) 연사 참여 및 팀 내 기술 세미나 정기적 주최",
          "유명 오픈소스 프로젝트의 메인테이너 수준 기여"
        ]
      }
    ]
  },
  {
    phase: "4단계 (33~34세)",
    title: "기술 전략 수립 및 리더십",
    summary: "전사적 기술 비전 제시 및 개발 조직 전체의 효율적 문화 조성",
    details: [
      {
        category: "전략적 기술 리더십",
        points: [
          "개발 조직 전체의 중장기 기술 로드맵 기획 및 기술 부채 관리 전략 수립",
          "새로운 기술 트렌드(AI 결합 프론트엔드 등)를 조직에 선제적으로 도입"
        ]
      },
      {
        category: "개발 문화 및 조직 관리",
        points: [
          "생산성을 극대화하는 개발 문화 및 프로세스(Agile, CI/CD 고도화) 정착",
          "팀 빌딩, 개발자 채용 및 평가 시스템 구축 참여"
        ]
      },
      {
        category: "최고 기술 책임자(CTO) 역량",
        points: [
          "C-레벨 리더진과 소통하며 회사의 경영 목표에 맞춘 거시적 기술 비전 제시"
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
