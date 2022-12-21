import type { FC } from 'react';

import { GradientText } from '@/components/GradientText';
import { CareerList } from '@/components/Home/CareerList';
import { Section } from '@/components/Section';
import { Title } from '@/components/Title';

export const Careers: FC = () => (
  <Section>
    <Title>
      <GradientText>Careers</GradientText>
    </Title>

    <CareerList />
  </Section>
);
