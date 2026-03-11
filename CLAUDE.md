# 제로톤 스타터 킷 - AI 개발 가이드

## 프로젝트 개요
- 매주 수요일 2시간 미니 해커톤("제로톤")을 위한 스타터 킷 템플릿
- 팀이 GitHub Template으로 레포를 생성하여 즉시 개발 시작

## 기술 스택
- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **UI 컴포넌트**: shadcn/ui
- **상태 관리**: Zustand (클라이언트), React Query (서버)
- **아이콘**: Lucide React
- **패키지 매니저**: npm

## 디렉토리 구조
- `frontend/` — Next.js 프로젝트 (모든 개발은 여기서)
  - `src/app/` — 페이지 & API 라우트
  - `src/components/ui/` — shadcn/ui 컴포넌트
  - `src/components/layout/` — 레이아웃 (header, footer)
  - `src/hooks/` — 커스텀 훅
  - `src/lib/` — 유틸리티 (cn(), queryClient)
  - `src/providers/` — QueryProvider
  - `src/stores/` — Zustand 스토어
- `docs/` — 문서 템플릿 (기획, 개발, 마케팅, 발표)

## 자주 쓰는 명령어
```bash
cd frontend
npm install          # 의존성 설치
npm run dev          # 개발 서버 (localhost:3000)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 실행
```

## 개발 컨벤션
- 새 페이지: `src/app/[page-name]/page.tsx`
- 새 API: `src/app/api/[endpoint]/route.ts`
- 새 컴포넌트: `src/components/` 하위에 생성
- 새 shadcn 컴포넌트 추가: `npx shadcn@latest add [component-name]`
- 상태 관리: 서버 데이터는 React Query, UI 상태는 Zustand
- 스타일링: Tailwind CSS 유틸리티 클래스 사용

## 참고 패턴

### 새 API 라우트 만들기
```typescript
// src/app/api/example/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: "example" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ received: body });
}
```

### 새 Zustand 스토어 만들기
```typescript
// src/stores/use-something-store.ts
import { create } from "zustand";

interface SomethingState {
  value: string;
  setValue: (v: string) => void;
}

export const useSomethingStore = create<SomethingState>((set) => ({
  value: "",
  setValue: (v) => set({ value: v }),
}));
```

### 새 React Query 훅 만들기
```typescript
// src/hooks/use-something.ts
import { useQuery } from "@tanstack/react-query";

export function useSomething() {
  return useQuery({
    queryKey: ["something"],
    queryFn: () => fetch("/api/something").then((r) => r.json()),
  });
}
```
