import type { FC, ReactNode } from 'react';

import { Title } from './Title';

type Props = {
  firstTitle?: ReactNode;
  firstColumn: ReactNode;
  secondTitle?: ReactNode;
  secondColumn: ReactNode;
};

export const SectionWithTwoColumn: FC<Props> = ({
  firstTitle,
  firstColumn,
  secondTitle,
  secondColumn,
}) => (
  <div className='mx-auto max-w-screen-lg p-4 sm:px-9'>
    <div className='grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2'>
      <div>
        {firstTitle && <Title>{firstTitle}</Title>}
        {firstColumn}
      </div>
      <div>
        {secondTitle && <Title>{secondTitle}</Title>}
        {secondColumn}
      </div>
    </div>
  </div>
);
