import { useQuery } from "@tanstack/react-query";

// React Query 커스텀 훅 예시
// 사용법: const { data, isLoading } = useHello();
export function useHello() {
  return useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const res = await fetch("/api/hello");
      if (!res.ok) throw new Error("API 요청 실패");
      return res.json();
    },
  });
}
