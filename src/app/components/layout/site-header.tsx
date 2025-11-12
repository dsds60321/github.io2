import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/app/constants/site';
import { topicDefinitions } from '@/app/constants/topics';
import { Button } from '@/app/components/ui/button';

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em]">
                    <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">KG</span>
                    <span className="hidden text-foreground/80 sm:inline">{siteConfig.title}</span>
                </Link>
                <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
                    {topicDefinitions.map((topic) => (
                        <Link key={topic.id} href={`/#${topic.id}`} className="transition hover:text-foreground">
                            {topic.label}
                        </Link>
                    ))}
                </nav>
                <Button asChild variant="secondary" size="sm">
                    <Link href="#posts" className="flex items-center gap-1">
                        글 목록
                        <ArrowUpRight size={16} />
                    </Link>
                </Button>
            </div>
        </header>
    );
}
