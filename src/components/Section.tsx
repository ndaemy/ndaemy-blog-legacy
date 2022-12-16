import type { FC, PropsWithChildren } from 'react';

export const Section: FC<PropsWithChildren> = ({ children }) => (
  <div className='mx-auto max-w-screen-lg px-6 py-4 sm:px-9'>{children}</div>
);
