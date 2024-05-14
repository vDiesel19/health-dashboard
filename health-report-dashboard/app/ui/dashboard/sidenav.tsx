import Link from 'next/link';
import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <div>
      <Link 
        className="logo"
        href="/">
          Home
      </Link>
      <div>
        <NavLinks />
      </div>
    </div>
  );
}