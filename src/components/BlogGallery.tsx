import type { MarkdownInstance } from 'astro';
import type { FC } from 'react';

import type { Frontmatter } from '@/types';

import { BlogCard } from './BlogCard';

type Props = {
  postList: MarkdownInstance<Frontmatter>[];
};

export const BlogGallery: FC<Props> = ({ postList }) => (
  <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
    {postList.map(post => (
      <BlogCard key={post.url} instance={post} />
    ))}
  </div>
);
