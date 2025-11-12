import { HeroSection } from '@/app/components/blog/hero';
import { PostHub } from '@/app/components/blog/post-hub';
import { topicDefinitions } from '@/app/constants/topics';
import { getAllPostListItems } from '@/app/lib/posts';

export default async function HomePage() {
    const posts = await getAllPostListItems();

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/90">
            <HeroSection />
            <PostHub posts={posts} topics={topicDefinitions} />
        </div>
    );
}
