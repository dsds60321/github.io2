---
hero: /images/workspace.png
---

## 왜 굳이 정적 블로그인가?

- 깃헙 페이지에 배포해서 어디서든 공개 가능하다.
- Next.js App Router 덕분에 데이터/뷰 레이어를 한 폴더에서 관리할 수 있다.
- Markdown 파일만 커밋하면 버전 관리와 기록이 동시에 끝난다.

## 기술 스택 메모

1. **Next.js 16** – App Router + 서버 컴포넌트로 렌더링 비용을 줄였다.
2. **Tailwind + shadcn/ui** – 컴포넌트의 규칙을 통일하고 반복되는 스타일을 없앴다.
3. **remark/rehype 파이프라인** – Markdown → HTML 변환과 코드 하이라이트를 처리한다.

```ts
export async function markdownToHtml(markdown: string) {
    return remark()
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypePrismPlus)
        .use(rehypeStringify)
        .process(markdown);
}
```

## 앞으로 하고 싶은 것

- 주제별 토픽 페이지 나누기
- 검색 + 태그 필터
- 글마다 다크 모드 최적화

배포까지 자동화하면 진짜 "건호 개발 블로그"라고 부를 수 있을 것 같다.
