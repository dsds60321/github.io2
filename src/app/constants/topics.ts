import type { TopicDefinition } from '@/app/lib/types';

export const topicDefinitions: TopicDefinition[] = [
    {
        id: 'foundations',
        label: 'Foundations',
        description: '블로그 인프라와 글쓰기 루틴 같은 기반 작업을 정리합니다.',
    },
    {
        id: 'craft',
        label: 'Craft',
        description: 'UI, DX, 실험적인 시도 등 취향이 담긴 작업 노트를 정리합니다.',
    },
];

export const topicMap = topicDefinitions.reduce<Record<string, TopicDefinition>>(
    (acc, topic) => ({ ...acc, [topic.id]: topic }),
    {},
);
