import type { FC } from 'react';

import Lightsail from '@/images/icons/Lightsail.svg';
import Nextjs from '@/images/icons/Next.js.svg';
import React from '@/images/icons/React.svg';
import Strapi from '@/images/icons/Strapi.svg';
import TypeScript from '@/images/icons/TypeScript.svg';
import Vercel from '@/images/icons/Vercel.svg';

const TECH_INFO = {
  Lightsail: {
    color: '#f3f4f6',
    bgColor: '#232f3e',
    icon: Lightsail,
  },
  'Next.js': {
    color: '#f3f4f6',
    bgColor: '#000000',
    icon: Nextjs,
  },
  React: {
    color: '#111827',
    bgColor: '#61dafb',
    icon: React,
  },
  Strapi: {
    color: '#f3f4f6',
    bgColor: '#2f2e8b',
    icon: Strapi,
  },
  TypeScript: {
    color: '#f3f4f6',
    bgColor: '#3178c6',
    icon: TypeScript,
  },
  Vercel: {
    color: '#f3f4f6',
    bgColor: '#000000',
    icon: Vercel,
  },
} as const;

type Props = {
  name: keyof typeof TECH_INFO;
};

export const TechBadge: FC<Props> = ({ name }) => (
  <div
    className='flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold'
    style={{
      color: TECH_INFO[name].color,
      backgroundColor: TECH_INFO[name].bgColor,
    }}
  >
    <img src={TECH_INFO[name].icon} alt={name} className='h-3 w-3' />
    {name}
  </div>
);
