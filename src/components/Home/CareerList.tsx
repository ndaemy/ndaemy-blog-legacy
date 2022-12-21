import type { FC } from 'react';

import { CareerItem } from './CareerItem';

export const CareerList: FC = () => (
  <ul>
    <CareerItem duration='2020.11 - Current' title='Watcha Inc.' />
    <CareerItem
      duration='2022.11'
      title='코드스테이츠 개발자 커뮤니케이션 특강'
    />
    <CareerItem
      duration='2020.07'
      title='POSCO 청년 AI · Big Data 아카데미 강의'
    />
    <CareerItem
      duration='2020.05 - 2020.10'
      title='이노밸류파트너즈 책임연구원 / React Native 강사'
    />
  </ul>
);
