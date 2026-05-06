const img = (path) => `/img/${path}`;

export const miniWorks = [
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

// ... 아래 works 배열은 그대로 유지