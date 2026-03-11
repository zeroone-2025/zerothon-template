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
    description: "아이디어 구체화 + 발표 준비",
    path: "docs/plan.md · docs/ppt.md",
    icon: BookOpen,
  },
  {
    title: "개발자",
    description: "바로 코딩을 시작하세요",
    path: "frontend/src/",
    icon: Terminal,
  },
  {
    title: "마케터",
    description: "사용자에게 다가가세요",
    path: "docs/marketing.md",
    icon: Users,
  },
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

      {/* Quick Start */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Rocket className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">빠른 시작</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

      {/* Role Guide */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">역할별 가이드</h2>
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
