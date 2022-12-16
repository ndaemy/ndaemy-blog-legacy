import type { FC, PropsWithChildren } from 'react';

export const GradientText: FC<PropsWithChildren> = ({ children }) => (
  <span className='bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent'>
    {children}
  </span>
);
