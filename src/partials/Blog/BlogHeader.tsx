import type { FC } from 'react';

import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';

export const BlogHeader: FC = () => (
  <Section>
    <PageHeader title='Blog' subtitle='전체 블로그 글입니다.' />
  </Section>
);
