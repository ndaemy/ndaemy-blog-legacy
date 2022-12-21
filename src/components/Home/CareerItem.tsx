import type { FC } from 'react';

type Props = {
  duration: string;
  title: string;
};

export const CareerItem: FC<Props> = ({ duration, title }) => (
  <li className='mb-6'>
    <h3 className='font-semibold text-gray-400'>{duration}</h3>
    <h4 className='text-xl'>{title}</h4>
  </li>
);
