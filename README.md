# 🚀 제로톤 스타터 킷

> Zero에서 One을 만드는 2시간의 경험

매주 수요일 2시간 미니 해커톤 **"제로톤(Zero-Thon)"** 을 위한 스타터 킷 템플릿입니다.
GitHub의 "Use this template" 버튼으로 새 레포를 생성하면, 즉시 기능 개발에 착수할 수 있습니다.

## 역할별 시작 가이드

| 역할 | 시작 파일 | 설명 |
|------|-----------|------|
| 🎯 **기획자** | `docs/01_plan.md` · `docs/04_ppt.md` | 팀 리더 — 아이디어 확정, 방향 결정, 발표 준비 |
| 💻 **개발자** | `docs/02_dev.md` · `frontend/src/` | 개발 문서 작성 후 코딩 시작 |
| 📢 **마케터** | `docs/03_marketing.md` | 사용자에게 다가가세요 |

## 문서 작성 가이드

`docs/` 폴더의 각 문서는 마크다운(.md) 형식의 템플릿입니다.
`[ ]` 체크박스, 테이블, 가이드 질문을 따라 작성하면 됩니다.

- **01_plan.md**: 프로젝트 개요, 타겟, MVP 범위, 타임라인 (기획자)
- **02_dev.md**: 기술 스택, 화면 구성, API 설계, AI 프롬프트 기록 (개발자)
- **03_marketing.md**: 페르소나, 카피라이팅, 유입 전략 (마케터)
- **04_ppt.md**: 4분 발표 스크립트 — Pain → Solution → Demo → Scalability (기획자)

## 시작하기

### 1. 템플릿으로 내 레포 생성
이 레포 상단의 **"Use this template"** → **"Create a new repository"** 클릭하여 내 레포를 만드세요.
- **Owner**: `zeroone-2025`로 설정
- **Repository name**: 팀 프로젝트명으로 지어주세요

### 2. 클론 & 의존성 설치
```bash
git clone https://github.com/zeroone-2025/<내-레포명>.git
cd <내-레포명>/frontend
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```
[http://localhost:3000](http://localhost:3000)에서 정상 동작을 확인하세요.

### 4. AI 코딩 어시스턴트 (Claude Code) 사용하기

> 비전공자도 터미널에서 Claude Code를 실행하면 AI가 코드를 대신 작성해 줍니다.

```bash
# 중요: 반드시 프로젝트 폴더 안에서 실행해야 합니다!

# 1. 터미널을 열고, 클론한 프로젝트 폴더로 이동
cd <내-레포명>

# 2. Claude Code 실행
claude

# 그러면 AI와 대화하며 코드를 생성할 수 있습니다.
# 예시: "메인 페이지에 로그인 버튼을 추가해 줘"
```

**주의사항:**
- `cd <내-레포명>` 으로 프로젝트 폴더에 먼저 들어가야 합니다. 바탕화면이나 홈 디렉토리에서 실행하면 프로젝트 파일을 찾지 못합니다.

#### 컨텍스트(Context)란?
Claude가 대화 중 참고하는 "작업 기억"입니다. 대화 내용, 읽은 파일, 명령 결과 등이 쌓이며,
대화가 길어지면 컨텍스트가 차오릅니다. `/compact`로 정리하거나 `/clear`로 새로 시작하세요.

#### @로 파일 참조하기
프롬프트에서 `@파일경로`를 입력하면 해당 파일 내용을 바로 전달할 수 있습니다.
- 파일 참조: `@src/app/page.tsx 이 파일을 분석해줘`
- 폴더 참조: `@src/components` → 폴더 구조 표시

#### 기본 명령어

| 명령어 | 설명 |
|--------|------|
| `/help` | 사용 가능한 모든 명령어 목록 확인 |
| `/clear` | 대화 초기화 — 새 주제로 전환할 때 |
| `/compact` | 긴 대화를 요약하여 컨텍스트 확보 |
| `/resume` | 이전 대화를 이어서 계속 작업 |
| `/init` | 프로젝트 분석 후 CLAUDE.md 자동 생성 |

### 5. 초기 파일 삭제 후 개발 시작
`src/app/page.tsx`를 삭제하고 개발을 시작하세요.

## 기술 스택

| 기술 | 용도 |
|------|------|
| **Next.js 15** | App Router 기반 풀스택 프레임워크 |
| **React 19** | UI 라이브러리 |
| **TypeScript** | 타입 안전성 |
| **Tailwind CSS** | 유틸리티 퍼스트 스타일링 |
| **shadcn/ui** | 재사용 가능한 UI 컴포넌트 |
| **React Query** | 서버 상태 관리 |
| **Zustand** | 클라이언트 상태 관리 |
| **Lucide Icons** | 아이콘 라이브러리 |

## 폴더 구조

```
zerothon-template/
├── frontend/          # Next.js 프로젝트 (개발자 영역)
│   └── src/
│       ├── app/       # 페이지 & API 라우트
│       ├── components/# UI 컴포넌트
│       ├── hooks/     # 커스텀 훅
│       ├── lib/       # 유틸리티
│       ├── providers/ # Provider 컴포넌트
│       └── stores/    # Zustand 스토어
├── docs/              # 문서 템플릿 (비개발자도 안전하게 접근)
│   ├── 01_plan.md     # 기획 문서
│   ├── 02_dev.md      # 개발 문서
│   ├── 03_marketing.md # 마케팅 문서
│   └── 04_ppt.md      # 발표 스크립트
├── CLAUDE.md          # AI 에이전트 가이드
└── README.md          # 이 파일
```

## 배포 (Vercel)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO&root-directory=frontend)

### 배포 방법
1. [Vercel](https://vercel.com)에 GitHub 계정으로 로그인
2. "Import Project" → 생성한 레포 선택
3. **Root Directory**를 `frontend`로 설정
4. "Deploy" 클릭
