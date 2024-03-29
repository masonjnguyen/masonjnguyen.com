import { SiBehance, SiGithub, SiLinkedin } from 'react-icons/si';

import { EmailButton } from '@/components/buttons/EmailButton';
import IconLink from '@/components/links/IconLink';

import { siteConfig } from '@/constant/config';
export default function Footer() {
  return (
    <footer className='nav-footer-width flex flex-col items-center space-y-3.5 border-t border-gray-100 pb-10 pt-7 dark:border-gray-800'>
      <SocialLinks />
      <p>
        © {new Date().getFullYear()} {siteConfig.title}
      </p>
    </footer>
  );
}

function SocialLinks() {
  return (
    <section className='flex space-x-4'>
      <EmailButton type='icon' />
      {socials.map((social) => (
        <IconLink
          label={social.id}
          key={social.id}
          href={social.href}
          icon={social.icon}
        />
      ))}
    </section>
  );
}

const socials = [
  {
    href: 'https://linkedin.com/in/masonjnguyen',
    icon: SiLinkedin,
    id: 'LinkedIn',
  },
  {
    href: 'https://behance.net/masonjnguyen',
    icon: SiBehance,
    id: 'Behance',
  },
  {
    href: 'https://github.com/masonjnguyen',
    icon: SiGithub,
    id: 'GitHub',
  },
];
