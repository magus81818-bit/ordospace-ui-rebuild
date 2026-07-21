const routeMetadata = [
  {
    pattern: /^\/$/,
    title: "ORDOSPACE",
    shortTitle: "홈",
    description: "역할 기반 ModuleCard 운영 흐름을 확인합니다.",
    breadcrumb: ["홈"],
  },
  {
    pattern: /^\/auth$/,
    title: "계정 선택",
    shortTitle: "로그인",
    description: "로컬 시드 계정으로 역할별 워크스페이스에 입장합니다.",
    breadcrumb: ["인증", "계정 선택"],
  },
  {
    pattern: /^\/workspace$/,
    title: "워크스페이스 이동",
    shortTitle: "이동 중",
    description: "현재 역할에 맞는 워크스페이스로 이동합니다.",
    breadcrumb: ["워크스페이스"],
  },
  {
    pattern: /^\/workspace\/admin$/,
    title: "운영 현황",
    shortTitle: "현황",
    description: "모듈카드 생성과 검토 흐름을 관리합니다.",
    breadcrumb: ["워크스페이스", "운영 현황"],
    role: "admin",
  },
  {
    pattern: /^\/workspace\/admin\/cards\/[^/]+$/,
    title: "모듈카드 상세",
    shortTitle: "카드 상세",
    description: "제출된 작업을 검토하고 다음 단계로 전달합니다.",
    breadcrumb: ["모듈카드", "상세"],
    role: "admin",
    dynamic: true,
  },
  {
    pattern: /^\/workspace\/worker$/,
    title: "작업 현황",
    shortTitle: "현황",
    description: "할당된 모듈카드와 진행 상태를 확인합니다.",
    breadcrumb: ["워크스페이스", "작업 현황"],
    role: "worker",
  },
  {
    pattern: /^\/workspace\/worker\/cards\/[^/]+$/,
    title: "내 모듈카드 상세",
    shortTitle: "카드 상세",
    description: "작업 내용을 갱신하고 검토를 요청합니다.",
    breadcrumb: ["내 모듈카드", "상세"],
    role: "worker",
    dynamic: true,
  },
  {
    pattern: /^\/workspace\/client$/,
    title: "프로젝트 현황",
    shortTitle: "현황",
    description: "검토 가능한 결과물과 프로젝트 상태를 확인합니다.",
    breadcrumb: ["워크스페이스", "프로젝트 현황"],
    role: "client",
  },
  {
    pattern: /^\/workspace\/client\/cards\/[^/]+$/,
    title: "승인 요청 상세",
    shortTitle: "승인 상세",
    description: "전달된 결과물을 승인하거나 수정을 요청합니다.",
    breadcrumb: ["승인함", "상세"],
    role: "client",
    dynamic: true,
  },
];

export const notFoundRouteMeta = {
  title: "페이지를 찾을 수 없음",
  shortTitle: "찾을 수 없음",
  description: "요청한 경로가 현재 ORDOSPACE에 연결되어 있지 않습니다.",
  breadcrumb: ["오류", "404"],
};

export function getRouteMeta(pathname) {
  return routeMetadata.find((entry) => entry.pattern.test(pathname)) ?? notFoundRouteMeta;
}

export { routeMetadata };

