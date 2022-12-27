import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Title } from './Title';

type Props = {
  title?: ReactNode;
};

export const Section: FC<PropsWithChildren<Props>> = ({ title, children }) => (
  <div className='mx-auto max-w-screen-lg p-4 sm:px-8'>
    {title && <Title>{title}</Title>}
    {children}
  </div>
);
