# 🛠️ 개발 문서

## 기술 스택

| 분류 | 기술 | 용도 |
|------|------|------|
| 프레임워크 | Next.js 15 (App Router) | 풀스택 웹 앱 |
| UI | shadcn/ui + Tailwind CSS | 컴포넌트 & 스타일링 |
| 상태 관리 | Zustand | 클라이언트 상태 |
| 서버 상태 | React Query | API 데이터 캐싱 |
| (추가) | | |

## 화면 구성

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 메인 | `/` | 랜딩 페이지 |
| (추가) | | |

## 컴포넌트 구조

```
src/
├── app/              # 페이지 & 라우트
├── components/
│   ├── ui/           # shadcn/ui 컴포넌트
│   └── layout/       # 레이아웃 컴포넌트 (header, footer)
├── lib/              # 유틸리티
├── hooks/            # 커스텀 훅
├── stores/           # Zustand 스토어
└── providers/        # React Query 등 Provider
```

## API 설계

| Method | Endpoint | 설명 | 요청 Body | 응답 |
|--------|----------|------|-----------|------|
| GET | `/api/hello` | 테스트 API | - | `{ message, timestamp }` |
| (추가) | | | | |

## 사용한 AI 프롬프트

> 개발 중 사용한 AI 프롬프트를 기록하세요. 심사 시 가산점이 될 수 있습니다.

### 프롬프트 1
- **목적**: (무엇을 만들려고 했는지)
- **사용 도구**: (Claude, ChatGPT, Cursor 등)
- **프롬프트 내용**:
```
(실제 사용한 프롬프트)
```
- **결과**: (어떤 결과를 얻었는지)
