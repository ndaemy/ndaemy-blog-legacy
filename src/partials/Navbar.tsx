import { Section } from '@/components/Section';
import { AppConfig } from '@/utils/AppConfig';

export const Navbar = () => (
  <Section>
    <div className='flex flex-col items-center gap-y-2 sm:flex-row sm:justify-between'>
      <a href='/' className='py-2'>
        <div className='flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent'>
          {AppConfig.siteName}
        </div>
      </a>

      <nav>
        <ul className='flex gap-x-3 font-medium text-gray-200'>
          <li>
            <a href='/posts' className='rounded px-3 py-2 hover:bg-slate-800'>
              Blogs
            </a>
          </li>
          <li>
            <a
              href='https://github.com/ndaemy'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded px-3 py-2 hover:bg-slate-800'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/ndaemy/'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded px-3 py-2 hover:bg-slate-800'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </Section>
);
