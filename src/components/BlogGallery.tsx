import type { MarkdownInstance } from 'astro';
import type { FC } from 'react';

import type { Frontmatter } from '@/types';

import { BlogCard } from './BlogCard';

type Props = {
  postList: MarkdownInstance<Frontmatter>[];
};

export const BlogGallery: FC<Props> = ({ postList }) =>
  postList.length ? (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
      {postList.map(post => (
        <BlogCard key={post.url} instance={post} />
      ))}
    </div>
  ) : (
    <div className='text-center'>
      <p className='text-gray-500'>No posts found.</p>
    </div>
  );
