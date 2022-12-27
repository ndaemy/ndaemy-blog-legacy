import type { MarkdownInstance } from 'astro';

import type { Frontmatter } from '@/types';

export const sortByDate = (posts: MarkdownInstance<Frontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};
