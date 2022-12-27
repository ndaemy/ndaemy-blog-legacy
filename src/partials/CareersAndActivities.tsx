import type { FC } from 'react';

import { GradientText } from '@/components/GradientText';
import { ActivityList } from '@/components/Home/ActivityList';
import { CareerList } from '@/components/Home/CareerList';
import { SectionWithTwoColumn } from '@/components/SectionWithTwoColumn';

export const CareersAndActivities: FC = () => (
  <SectionWithTwoColumn
    firstTitle={<GradientText>Careers</GradientText>}
    firstColumn={<CareerList />}
    secondTitle={<GradientText>Activities</GradientText>}
    secondColumn={<ActivityList />}
  />
);
