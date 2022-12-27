import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';
import type { FC } from 'react';

import type { Frontmatter } from '@/types';

type Props = {
  instance: MarkdownInstance<Frontmatter>;
};

export const BlogCard: FC<Props> = ({ instance }) => (
  <a className='hover:translate-y-1' href={instance.url}>
    <div className='overflow-hidden rounded-md bg-slate-800'>
      <div className='aspect-w-3 aspect-h-2'>
        <img
          className='h-full w-full object-cover object-center'
          src={instance.frontmatter.imgSrc}
          alt={instance.frontmatter.imgAlt}
          loading='lazy'
        />
      </div>
      <div className='px-3 pt-4 pb-6 text-center'>
        <h2 className='text-xl font-semibold'>{instance.frontmatter.title}</h2>
        <div className='mt-1 text-xs text-gray-400'>
          {format(new Date(instance.frontmatter.pubDate), 'LLL d, yyyy')}
        </div>
        <div className='mt-2 text-sm'>{instance.frontmatter.description}</div>
      </div>
    </div>
  </a>
);
