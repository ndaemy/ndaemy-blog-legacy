import type { FC, PropsWithChildren } from 'react';

export const Title: FC<PropsWithChildren> = ({ children }) => (
  <div className='mb-6 text-2xl font-bold'>{children}</div>
);
