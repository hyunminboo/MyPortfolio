const img = (path) => `/img/${path}`;

export const miniWorks = [
  {
    id: "m-005",
    icon: img("mini-api.png"),
    title: "파이썬 미니 프로젝트",
    description: "파이썬을 활용한 미니 프로젝트입니다.",
    tags: ["Python"],
    links: { notion: "https://app.notion.com/p/372e37e5595f80f090d9c06a6e52da82?source=copy_link" },
  },
  {
    id: "m-001",
    icon: img("mini-todo.png"),
    title: "투두리스트 미니 프로젝트",
    description: "React + localStorage 기반의 할 일 관리 앱. 필터/정렬 기능 포함.",
    tags: ["React", "SCSS"],
    links: { github: "#", demo: "#" },
  },
  {
    id: "m-002",
    icon: img("mini-diary.png"),
    title: "감정 일기장 미니 프로젝트",
    description: "감정 아이콘 선택 + 일기 저장 앱. Context API로 상태 관리.",
    tags: ["React", "Context"],
    links: { github: "#", demo: "#" },
  },
  {
    id: "m-003",
    icon: img("mini-api.png"),
    title: "투두리스트 미니 프로젝트",
    description: "REST API 연동 투두리스트. Axios + Express 백엔드 연결.",
    tags: ["React", "API"],
    links: { github: "#", demo: "#" },
  },
  {
    id: "m-004",
    icon: img("mini-weather.png"),
    title: "날씨 대시보드 미니 프로젝트",
    description: "날씨 API 연동 대시보드. 위치 기반 실시간 날씨 표시.",
    tags: ["React", "API"],
    links: { github: "#", demo: "#" },
  },
];

const works = [
  {
    id: "w-002",
    title: "TSM · 학교 인사관리 시스템 (팀프로젝트)",
    description:
      "근태·급여·인사발령까지, 파편화된 교무 업무를 하나로 통합하는 학교 특화 인사관리 시스템입니다. Next.js 기반 프론트엔드와 Spring Boot 백엔드로 구축했습니다.",
    tags: ["Next.js", "TypeScript", "Spring Boot", "MySQL", "Docker"],
    thumbnail: img("tsm-landing.png"),
    links: { notion: "https://app.notion.com/p/SmartRAD-part-3b2e37e5595f80bcbc95d3c3943f3899?source=copy_link", demo: "https://tsms.o-r.kr/" },
    year: "2025",
    period: "2024.12 - 2025.02 (약 3개월)",
    team: "프론트엔드 2명, 백엔드 2명",
    myRole: "프론트엔드 리드 / UI·UX 설계 및 아키텍처 세팅",
    features: [
      {
        title: "인사 데이터 대시보드",
        desc: "복잡한 교직원 정보 및 근태 현황을 한눈에 파악할 수 있는 다이나믹 데이터 테이블 구현 (정렬, 다중 필터링, 페이지네이션)."
      },
      {
        title: "권한별 라우팅 및 접근 제어",
        desc: "일반 교직원과 최고 관리자의 권한을 분리하여, JWT 토큰 기반의 안전한 페이지 접근 제어 및 API 예외 처리 구현."
      }
    ],
    troubleshooting: [
      {
        title: "문제: 대량의 인사 데이터 렌더링 시 성능 저하",
        desc: "수백 명의 교직원 데이터를 한 번에 불러오면서 화면 버벅임 현상이 발생했습니다."
      },
      {
        title: "해결: 가상화(Virtualization) 및 캐싱 도입",
        desc: "React Virtualized를 도입하여 DOM 렌더링 노드 수를 획기적으로 줄이고, React Query를 통해 서버 데이터를 캐싱하여 불필요한 API 호출을 60% 이상 감소시켰습니다."
      }
    ]
  },
  {
    id: "w-003",
    title: "Trip archive",
    description: "react와 springboot기반 여행 아카이브 사이트입니다. 사용자가 여행지를 등록하고 사진을 업로드할 수 있습니다.",
    tags: ["React", "Spring Boot", "MySQL", "AWS S3", "Docker"],
    thumbnail: img("p-1.png"), 
    links: { notion: "https://app.notion.com/p/fullstack-32fe37e5595f80dc8a7bd31380f65460?source=copy_link", demo: "https://triparchive.o-r.kr/" },
    period: "2024.08 - 2024.10 (약 2개월)",
    team: "1인 프로젝트 (개인 프로젝트)",
    myRole: "풀스택 전담 / 프론트엔드 및 백엔드 전 과정 기획·설계·개발",
    features: [
      {
        title: "RESTful API 설계 및 백엔드 구축",
        desc: "Spring Boot와 JPA를 활용하여 사용자, 여행지, 미디어 파일 처리를 위한 견고한 REST API를 설계하고 데이터베이스(MySQL)와 연동했습니다."
      },
      {
        title: "프론트엔드 UI/UX 및 클라우드 연동",
        desc: "React를 이용해 인터랙티브 지도(Kakao/Google) 뷰어와 커스텀 오버레이를 구현하고, AWS S3를 통해 원활한 다중 이미지 업로드 환경을 구축했습니다."
      }
    ],
    troubleshooting: [
      {
        title: "문제: 대용량 이미지 업로드 시 서버 부하 및 스토리지 낭비",
        desc: "사용자가 올리는 고해상도 이미지(10MB 이상)를 그대로 서버를 거쳐 S3에 저장하면서 병목 현상과 불필요한 트래픽 비용이 발생했습니다."
      },
      {
        title: "해결: Presigned URL 및 클라이언트 리사이징",
        desc: "브라우저 단(Canvas API)에서 1차 리사이징 후, 서버를 거치지 않고 Spring Boot에서 발급한 S3 Presigned URL을 통해 클라이언트에서 직접 업로드하도록 아키텍처를 개선하여 서버 부하를 0으로 만들고 업로드 속도를 대폭 향상시켰습니다."
      }
    ]
  },
  {
    id: "w-001",
    title: "NexusHub (팀 프로젝트)",
    description:
      "React + Vite 기반의 개인 포트폴리오. 다크/라이트 테마, 반응형, 관리자 페이지까지 직접 구현한 풀스택 프로젝트입니다.",
    tags: ["React", "TypeScript", "SCSS", "Vite"],
    thumbnail: img("nexus-hub.jpg"),
    links: { notion: "https://app.notion.com/p/397e37e5595f80ba9793fb6ad4b52a9b?source=copy_link", demo: "https://team-project-nexus-hub.vercel.app/" },
    year: "2024",
    period: "2024.03 - 2024.06 (약 3개월)",
    team: "프론트엔드 4명",
    myRole: "프론트엔드 리드 / 공통 레이아웃 및 테마 시스템 구축",
    features: [
      {
        title: "전역 테마 상태 관리 (다크/라이트 모드)",
        desc: "Context API와 SCSS CSS Variables를 혼합 사용하여 깜빡임 없는 유려한 테마 전환 기능을 시스템 전반에 적용했습니다."
      },
      {
        title: "반응형 3D 인터랙션",
        desc: "Three.js(React Three Fiber)를 활용하여 사용자 마우스 움직임에 반응하는 배경 파티클 애니메이션을 최적화하여 60FPS로 렌더링합니다."
      }
    ],
    troubleshooting: [
      {
        title: "문제: Three.js 렌더링으로 인한 모바일 배터리 소모 및 발열",
        desc: "화면 전체에 렌더링되는 3D 캔버스 때문에 저사양 모바일 기기에서 프레임 드랍과 발열이 발생했습니다."
      },
      {
        title: "해결: 디바이스 감지 및 렌더링 퀄리티 동적 조절",
        desc: "사용자의 기기(모바일/데스크톱)를 감지하여 파티클 개수와 그림자 해상도를 동적으로 조절하고, 화면 밖으로 벗어난 컴포넌트는 렌더링 루프에서 제외하는 최적화를 진행했습니다."
      }
    ]
  }
];

export default works;