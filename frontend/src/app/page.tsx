import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Rocket,
  FolderTree,
  Users,
  Terminal,
  Layers,
  BookOpen,
  Palette,
  Zap,
  Copy,
  FileText,
} from "lucide-react";

const techStack = [
  { name: "Next.js 15", description: "App Router + React 19", icon: Zap },
  { name: "shadcn/ui", description: "재사용 가능한 UI 컴포넌트", icon: Layers },
  { name: "Tailwind CSS", description: "유틸리티 퍼스트 스타일링", icon: Palette },
  { name: "React Query", description: "서버 상태 관리", icon: Rocket },
  { name: "Zustand", description: "클라이언트 상태 관리", icon: BookOpen },
  { name: "Lucide Icons", description: "아이콘 라이브러리", icon: Copy },
];

const roles = [
  {
    title: "기획자",
    description: "팀 리더 — 아이디어 확정, 방향 결정, 발표 준비",
    path: "docs/01_plan.md · docs/04_ppt.md",
    icon: BookOpen,
  },
  {
    title: "개발자",
    description: "개발 문서 작성 후 코딩 시작",
    path: "docs/02_dev.md · frontend/src/",
    icon: Terminal,
  },
  {
    title: "마케터",
    description: "사용자에게 다가가세요",
    path: "docs/03_marketing.md",
    icon: Users,
  },
];

const docs = [
  { name: "01_plan.md", description: "프로젝트 개요, 타겟, MVP 범위, 타임라인", role: "기획자" },
  { name: "02_dev.md", description: "기술 스택, 화면 구성, API 설계, AI 프롬프트 기록", role: "개발자" },
  { name: "03_marketing.md", description: "페르소나, 카피라이팅, 유입 전략", role: "마케터" },
  { name: "04_ppt.md", description: "4분 발표 스크립트 — Pain → Solution → Demo → Scalability", role: "기획자" },
];

const claudeCommands = [
  { command: "/help", description: "사용 가능한 모든 명령어 목록 확인" },
  { command: "/clear", description: "대화 초기화 — 새 주제로 전환할 때" },
  { command: "/compact", description: "긴 대화를 요약하여 컨텍스트 확보" },
  { command: "/resume", description: "이전 대화를 이어서 계속 작업" },
  { command: "/init", description: "프로젝트 분석 후 CLAUDE.md 자동 생성" },
];

const steps = [
  {
    step: "1",
    title: "템플릿 사용",
    description: "GitHub에서 'Use this template' 클릭",
    command: null,
  },
  {
    step: "2",
    title: "의존성 설치",
    description: "프론트엔드 패키지 설치",
    command: "cd frontend && npm install",
  },
  {
    step: "3",
    title: "개발 시작",
    description: "로컬 개발 서버 실행",
    command: "npm run dev",
  },
  {
    step: "4",
    title: "AI 코딩 (Claude Code)",
    description: "프로젝트 폴더에서 Claude Code를 실행하세요. 반드시 프로젝트 최상위 폴더에서!",
    command: "cd <내-레포명> && claude",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">
          매주 수요일, 2시간 미니 해커톤
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          제로톤에 오신 걸 환영합니다
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Zero에서 One을 만드는 경험, 지금 시작하세요.
        </p>
      </section>

      <Separator className="mb-16" />

      {/* Role Guide */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">역할별 시작 가이드</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((role) => (
            <Card key={role.title}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <role.icon className="h-4 w-4 text-muted-foreground" />
                  <CardTitle className="text-base">{role.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {role.description}
                </p>
                <code className="text-xs rounded bg-muted px-2 py-1">
                  {role.path}
                </code>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Document Guide */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">문서 작성 가이드</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">docs/</code> 폴더의 각 문서는 마크다운 형식의 템플릿입니다. 체크박스, 테이블, 가이드 질문을 따라 작성하면 됩니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {docs.map((doc) => (
            <Card key={doc.name}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-mono">{doc.name}</CardTitle>
                  <Badge variant="outline" className="text-xs">{doc.role}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{doc.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Rocket className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">시작하기</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <Card key={s.step}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {s.step}
                  </span>
                  <CardTitle className="text-base">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {s.description}
                </p>
                {s.command && (
                  <code className="block rounded bg-muted px-3 py-2 text-sm font-mono">
                    {s.command}
                  </code>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Claude Code Guide */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Claude Code 기본 사용법</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">컨텍스트(Context)란?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Claude가 대화 중 참고하는 &quot;작업 기억&quot;입니다. 대화 내용, 읽은 파일, 명령 결과 등이 쌓이며, 대화가 길어지면 컨텍스트가 차오릅니다.{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">/compact</code>로 정리하거나{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">/clear</code>로 새로 시작하세요.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">@로 파일 참조하기</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                프롬프트에서 <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">@파일경로</code>를 입력하면 해당 파일 내용을 바로 전달할 수 있습니다.
              </p>
              <div className="space-y-1">
                <code className="block rounded bg-muted px-3 py-1.5 text-xs font-mono">
                  @src/app/page.tsx 이 파일을 분석해줘
                </code>
                <code className="block rounded bg-muted px-3 py-1.5 text-xs font-mono">
                  @src/components → 폴더 구조 표시
                </code>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">기본 명령어</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 font-medium">명령어</th>
                    <th className="text-left py-2 font-medium">설명</th>
                  </tr>
                </thead>
                <tbody>
                  {claudeCommands.map((cmd) => (
                    <tr key={cmd.command} className="border-b last:border-0">
                      <td className="py-2 pr-4">
                        <code className="rounded bg-muted px-2 py-0.5 text-xs font-mono font-semibold">
                          {cmd.command}
                        </code>
                      </td>
                      <td className="py-2 text-muted-foreground">
                        {cmd.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Layers className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">기술 스택</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech) => (
            <Card key={tech.name}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <tech.icon className="h-4 w-4 text-muted-foreground" />
                  <CardTitle className="text-base">{tech.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{tech.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Folder Structure */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <FolderTree className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">폴더 구조</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                frontend/
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Next.js 프로젝트가 위치한 개발 영역입니다. 코드 수정은 이
                폴더에서 진행하세요.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                docs/
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                기획, 개발, 마케팅, 발표 문서 템플릿이 있는 문서 영역입니다.
                비개발자도 안전하게 작업할 수 있습니다.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Getting Started Notice */}
      <section className="mb-16">
        <Card className="border-red-500 bg-red-50 dark:bg-red-950/30">
          <CardContent className="pt-6 text-center">
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              이 페이지는 스타터 킷 안내용입니다.{" "}
              <code className="rounded bg-red-100 dark:bg-red-900/50 px-1.5 py-0.5 text-xs font-mono text-red-700 dark:text-red-300">
                src/app/page.tsx
              </code>
              를 지우고 개발을 시작하세요.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
