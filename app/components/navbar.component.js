import Link from 'next/link';
import { useNavigation } from 'next/navigation';  // Import useNavigation instead of useRouter
import "../styles/components/navbar.styles.scss";

const pages = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Blog', path: '/blog' },
  { id: 3, title: 'Events', path: '/events' },
  { id: 4, title: 'Vehicles', path: '/vehicles' },
  { id: 5, title: 'About us', path: '/about' },
  // Add more page objects as needed
];

const Navbar = () => {
  const navigation = useNavigation();  // Use useNavigation instead of useRouter

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
              <a className={navigation.pathname === page.path ? 'active' : ''}>
                {page.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className='left--sidenav'>
        <p>icons</p>
      </div>
    </nav>
  );
};

export default Navbar;
