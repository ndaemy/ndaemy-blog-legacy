import type { FC, ReactNode } from 'react';

type Props = {
  firstColumn: ReactNode;
  secondColumn: ReactNode;
};

export const SectionWithTwoColumn: FC<Props> = ({
  firstColumn,
  secondColumn,
}) => (
  <div className='mx-auto max-w-screen-lg px-6 py-4 sm:px-9'>
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
      <div>{firstColumn}</div>
      <div>{secondColumn}</div>
    </div>
  </div>
);
