import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock3, Tag } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { siteConfig } from '@/app/constants/site';
import { getAllPostListItems, getPostBySlug } from '@/app/lib/posts';
import { formatDate } from '@/app/lib/date';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await getAllPostListItems();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug).catch(() => null);
    if (!post) {
        return {
            title: siteConfig.title,
        };
    }

    return {
        title: `${post.title} · ${siteConfig.title}`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `${siteConfig.url}/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug).catch(() => null);

    if (!post) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-3xl px-6 py-16">
            <div className="space-y-6">
                <Button asChild variant="ghost" className="w-fit px-0 text-muted-foreground">
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft size={16} />
                        목록으로 돌아가기
                    </Link>
                </Button>
                <div className="space-y-4">
                    <Badge variant="outline" className="capitalize">
                        {post.topic}
                    </Badge>
                    <h1 className="text-4xl font-semibold text-foreground">{post.title}</h1>
                    <p className="text-lg text-muted-foreground">{post.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span className="flex items-center gap-1">
                            <Clock3 size={16} /> {post.readingMinutes}분 읽기
                        </span>
                        <span>{post.wordCount} 단어</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="subtle" className="flex items-center gap-1">
                                <Tag size={14} />
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
            <div className="post-body mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
    );
}
