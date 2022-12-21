import { Section } from '@/components/Section';
import { AppConfig } from '@/utils/AppConfig';

export const Footer = () => (
  <Section>
    <div className='border-t border-gray-600 pt-5'>
      <div className='text-sm text-gray-200'>
        {`© ${new Date().getFullYear()} ${AppConfig.author}`}
      </div>
    </div>
  </Section>
);
