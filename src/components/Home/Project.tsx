import type { FC, ReactNode } from 'react';

type Props = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
  category: ReactNode;
};

export const Project: FC<Props> = ({
  img,
  name,
  description,
  link,
  category,
}) => (
  <div className='flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-4 md:flex-row md:p-6'>
    <div className='shrink-0'>
      <a href={link} target='_blank' rel='noopenner noreferrer'>
        <img
          className='h-36 w-36 hover:translate-y-1'
          src={img.src}
          alt={img.alt}
          loading='lazy'
        />
      </a>
    </div>
    <div>
      <div className='flex flex-col justify-center gap-y-2'>
        <a href={link} target='_blank' rel='noopenner noreferrer'>
          <div className='text-xl font-semibold'>{name}</div>
        </a>
        <div className='flex flex-wrap gap-2'>{category}</div>
      </div>
      <p className='mt-3 text-gray-400'>{description}</p>
    </div>
  </div>
);
