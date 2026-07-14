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
    id: "w-003",
    title: "Trip archive",
    description: "react와 springboot기반 여행 아카이브 사이트입니다. 사용자가 여행지를 등록하고 사진을 업로드할 수 있습니다.",
    tags: ["React", "Spring Boot", "MySQL", "AWS S3", "Docker"],
    thumbnail: img("p-1.png"), 
    links: { notion: "https://app.notion.com/p/fullstack-32fe37e5595f80dc8a7bd31380f65460?source=copy_link", demo: "https://triparchive.o-r.kr/" },
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
  },
  {
    id: "w-002",
    title: "팀 협업 프로젝트",
    description:
      "팀원들과 함께 기획·개발한 웹 서비스. Figma로 디자인 협업, GitHub Flow로 브랜치 전략을 적용했습니다.",
    tags: ["React", "Express", "MySQL"],
    thumbnail: img("p-3.png"),
    links: { notion: "#", demo: "#" },
    year: "2024",
  },

  
];

export default works;