import type { FC } from 'react';

import { ListItem } from './ListItem';

export const CareerList: FC = () => (
  <ul>
    <ListItem duration='2020.11 - Current' title='Watcha Frontend Engineer' />
    <ListItem duration='2022.11' title='Code States 개발자 커뮤니케이션 특강' />
    <ListItem
      duration='2020.07'
      title='POSCO 청년 AI · Big Data 아카데미 강의'
    />
    <ListItem
      duration='2020.05 - 2020.10'
      title='INNOVALUE Partners 책임연구원 / React Native 강사'
    />
  </ul>
);
