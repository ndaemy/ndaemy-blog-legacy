import type { FC, PropsWithChildren } from 'react';

export const Section: FC<PropsWithChildren> = ({ children }) => (
  <div className='mx-auto max-w-screen-lg p-4 sm:px-8'>{children}</div>
);
