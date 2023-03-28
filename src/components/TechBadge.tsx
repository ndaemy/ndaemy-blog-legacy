import type { FC } from 'react';

import JavaScript from '@/images/icons/JavaScript.svg';
import Lightsail from '@/images/icons/Lightsail.svg';
import NestJS from '@/images/icons/NestJS.svg';
import Netlify from '@/images/icons/Netlify.svg';
import Nextjs from '@/images/icons/Next.js.svg';
import React from '@/images/icons/React.svg';
import Strapi from '@/images/icons/Strapi.svg';
import TypeScript from '@/images/icons/TypeScript.svg';
import Vercel from '@/images/icons/Vercel.svg';

const TECH_INFO = {
  JavaScript: {
    color: '#111827',
    bgColor: '#f7df1e',
    icon: JavaScript,
  },
  Lightsail: {
    color: '#f3f4f6',
    bgColor: '#232f3e',
    icon: Lightsail,
  },
  NestJS: {
    color: '#f3f4f6',
    bgColor: '#e0234e',
    icon: NestJS,
  },
  Netlify: {
    color: '#111827',
    bgColor: '#00c7b7',
    icon: Netlify,
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
