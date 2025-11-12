import type { PostSource } from '@/app/lib/types';

const launchingDevBlog: PostSource = {
    slug: 'launching-dev-blog',
    topic: 'foundations',
    title: '정적 사이트로 시작하는 건호의 개발 블로그',
    description: 'Next.js App Router와 markdown 파이프라인으로 심플한 기술 블로그를 세팅한 기록입니다.',
    publishedAt: '2025-02-15',
    tags: ['Next.js', 'Blogging', 'Setup'],
    featured: true,
    contentPath: 'foundations/launching-dev-blog.md',
};

export default launchingDevBlog;
