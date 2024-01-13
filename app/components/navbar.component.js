// Navbar.js

import Link from 'next/link';
import "../styles/components/navbar.styles.scss";

const pages = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Blog', path: '/blog' },
  { id: 3, title: 'Events', path: '/events' },
  { id: 4, title: 'Vehicles', path: '/vehicles' },
  { id: 5, title: 'About us', path: '/about' },
  { id: 2, title: 'Blog', path: '/contact' },
  // Add more page objects as needed
];

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img 
        src=''
        className='logo'
        />
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <Link href={page.path}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
