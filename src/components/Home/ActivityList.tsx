import type { FC } from 'react';

import { ListItem } from './ListItem';

export const ActivityList: FC = () => (
  <ul>
    <ListItem
      duration='2022.01 - 2022.12'
      title='멋쟁이사자처럼 명지대 10기 대표'
    />
    <ListItem
      duration='2021.01 - 2021.12'
      title='멋쟁이사자처럼 명지대(자연) 9기 운영진'
    />
    <ListItem
      duration='2020.01 - 2020.12'
      title='멋쟁이사자처럼 명지대(자연) 8기 대표'
    />
    <ListItem
      duration='2019.09 - 2019.12'
      title='멋쟁이사자처럼 명지대(자연) 7기 회원'
    />
  </ul>
);
