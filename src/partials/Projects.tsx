import { GradientText } from '@/components/GradientText';
import { Project } from '@/components/Home/Project';
import { Section } from '@/components/Section';
import { TechBadge } from '@/components/TechBadge';

export const Projects = () => (
  <Section title={<GradientText>Projects</GradientText>}>
    <div className='flex flex-col gap-6'>
      <Project
        name='Mission24 연합해커톤 홍보/안내 페이지 제작'
        description='2022 멋쟁이사자처럼 경기남부연합 해커톤 홍보 및 안내 페이지를 제작했습니다.'
        link='https://mission24.link'
        img={{
          src: '/assets/images/project-mission24.png',
          alt: 'Mission24 Flag Icon',
        }}
        category={
          <>
            <TechBadge name='TypeScript' />
            <TechBadge name='React' />
            <TechBadge name='Next.js' />
            <TechBadge name='Strapi' />
            <TechBadge name='Vercel' />
            <TechBadge name='Lightsail' />
          </>
        }
      />
      <Project
        name='멋쟁이사자처럼 명지대(자연) 공식 사이트 제작'
        description='멋쟁이사자처럼 명지대(자연) 홍보를 위해 기존 페이지를 개편했습니다.'
        link='https://mju-likelion.org'
        img={{
          src: '/assets/images/project-link.png',
          alt: 'Link Icon',
        }}
        category={
          <>
            <TechBadge name='JavaScript' />
            <TechBadge name='React' />
            <TechBadge name='Netlify' />
          </>
        }
      />
      <Project
        name='멋쟁이사자처럼 명지대(자연) 11기 지원 사이트 제작'
        description='멋쟁이사자처럼 명지대(자연) 11기 지원을 받기 위해 지원 사이트를 만들었습니다.'
        link='https://apply.mju-likelion.org'
        img={{
          src: '/assets/images/project-bookmark-fav.png',
          alt: 'Favorite Bookmark Icon',
        }}
        category={
          <>
            <TechBadge name='JavaScript' />
            <TechBadge name='TypeScript' />
            <TechBadge name='React' />
            <TechBadge name='Next.js' />
            <TechBadge name='NestJS' />
            <TechBadge name='Netlify' />
            <TechBadge name='Lightsail' />
          </>
        }
      />
    </div>
  </Section>
);
