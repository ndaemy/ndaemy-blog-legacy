import type { MarkdownInstance } from 'astro';
import type { FC } from 'react';

import { BlogGallery } from '@/components/BlogGallery';
import { GradientText } from '@/components/GradientText';
import { Section } from '@/components/Section';
import type { Frontmatter } from '@/types';

type Props = {
  postList: MarkdownInstance<Frontmatter>[];
};

export const Posts: FC<Props> = ({ postList }) => (
  <Section
    title={
      <div className='flex items-baseline justify-between'>
        <div>
          <GradientText>Posts</GradientText>
        </div>

        <div className='text-sm'>
          <a href='/posts'>모든 포스트 보러가기 →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={postList} />
  </Section>
);
