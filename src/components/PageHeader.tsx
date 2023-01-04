import type { FC } from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

export const PageHeader: FC<Props> = ({ title, subtitle }) => (
  <div className='text-center'>
    <div className='text-3xl font-bold'>{title}</div>
    <div className='mt-3 text-gray-200'>{subtitle}</div>
  </div>
);
