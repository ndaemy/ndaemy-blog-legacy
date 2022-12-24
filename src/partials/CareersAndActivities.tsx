import type { FC } from 'react';

import { GradientText } from '@/components/GradientText';
import { ActivityList } from '@/components/Home/ActivityList';
import { CareerList } from '@/components/Home/CareerList';
import { SectionWithTwoColumn } from '@/components/SectionWithTwoColumn';
import { Title } from '@/components/Title';

export const CareersAndActivities: FC = () => (
  <SectionWithTwoColumn
    firstColumn={
      <>
        <Title>
          <GradientText>Careers</GradientText>
        </Title>

        <CareerList />
      </>
    }
    secondColumn={
      <>
        <Title>
          <GradientText>Activities</GradientText>
        </Title>

        <ActivityList />
      </>
    }
  />
);
