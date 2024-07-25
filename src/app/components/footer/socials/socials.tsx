import { InstagramIcon } from '@/app/icons/instagram';
import { FacebookIcon } from '@/app/icons/facebook';
import { TwitterIcon } from '@/app/icons/twitter';
import { LinkedinIcon } from '@/app/icons/linkedin';

const socialLinks = [
  {
    name: 'Instagram',
    link: '',
    icon: <InstagramIcon />,
  },
  {
    name: 'Facebook',
    link: '',
    icon: <FacebookIcon />,
  },
  {
    name: 'Twitter',
    link: '',
    icon: <TwitterIcon />,
  },
  {
    name: 'LinkedIn',
    link: '',
    icon: <LinkedinIcon />,
  },
];

export const Socials = () => {
  return (
    <div className="flex items-center space-x-7.5">
      {socialLinks.map(({ name, link, icon }, index) => {
        return (
          <div aria-label={name} key={index} className="p-2.5 bg-light-100 rounded">
            <a href={link} target="_blank">
              {icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};
