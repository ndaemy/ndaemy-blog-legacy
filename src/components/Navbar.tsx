import { Section } from '@/components/Section';
import { AppConfig } from '@/utils/AppConfig';

export const Navbar = () => {
  type OnClick = (target: string) => React.MouseEventHandler<HTMLAnchorElement>;

  const onClick: OnClick = target => e => {
    window.gtag('event', 'n_click', {
      n_path: '/navbar',
      n_target: target,
      n_link: (e.target as HTMLAnchorElement).href,
    });
  };

  return (
    <Section>
      <div className='flex flex-col items-center gap-y-2 sm:flex-row sm:justify-between'>
        <a href='/' onClick={onClick('logo')} className='py-2'>
          <div className='flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent'>
            {AppConfig.siteName}
          </div>
        </a>

        <nav>
          <ul className='flex gap-x-3 font-medium text-gray-200'>
            <li>
              <a
                href='/posts'
                onClick={onClick('blog')}
                className='rounded px-3 py-2 hover:bg-slate-800'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='https://github.com/ndaemy'
                onClick={onClick('github')}
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
                onClick={onClick('linkedin')}
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
};
