import type { MarkdownInstance } from 'astro';
import type { FC } from 'react';

import { BlogGallery } from '@/components/BlogGallery';
import { GradientText } from '@/components/GradientText';
import { Section } from '@/components/Section';
import type { Frontmatter } from '@/types';

type Props = {
  postList: MarkdownInstance<Frontmatter>[];
};

export const RecentPosts: FC<Props> = ({ postList }) => (
  <Section
    title={
      <div className='flex items-baseline justify-between'>
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className='text-sm'>
          <a href='/posts'>View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={postList} />
  </Section>
);
