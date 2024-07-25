import Link from 'next/link';

const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About us',
    path: '/about-us',
  },
  {
    name: 'Work',
    path: '/work',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Contact us',
    path: '/contact-us',
  },
];

export const Nav = () => {
  return (
    <nav>
      <ul className="columns-2 gap-16">
        {navItems.map(({ name, path }, index) => {
          return (
            <li key={index} className="mb-3">
              <Link href={path} className="block py-1 text-xl text-dark-300">{name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
