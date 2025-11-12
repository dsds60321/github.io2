import type { PostSource } from '@/app/lib/types';
import { craftPosts } from './craft';
import { foundationsPosts } from './foundations';

export const postsByTopic = {
    foundations: foundationsPosts,
    craft: craftPosts,
};

export const allPosts: PostSource[] = [
    ...postsByTopic.foundations,
    ...postsByTopic.craft,
];
