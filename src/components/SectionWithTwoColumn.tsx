import type { FC, ReactNode } from 'react';

type Props = {
  firstColumn: ReactNode;
  secondColumn: ReactNode;
};

export const SectionWithTwoColumn: FC<Props> = ({
  firstColumn,
  secondColumn,
}) => (
  <div className='mx-auto max-w-screen-lg p-4 sm:px-9'>
    <div className='grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2'>
      <div>{firstColumn}</div>
      <div>{secondColumn}</div>
    </div>
  </div>
);
