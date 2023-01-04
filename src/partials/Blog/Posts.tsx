import type { MarkdownInstance } from 'astro';
import type { FC } from 'react';

import { BlogGallery } from '@/components/BlogGallery';
import { Section } from '@/components/Section';
import type { Frontmatter } from '@/types';

type Props = {
  postList: MarkdownInstance<Frontmatter>[];
};

export const Posts: FC<Props> = ({ postList }) => (
  <Section>
    <BlogGallery postList={postList} />
  </Section>
);
