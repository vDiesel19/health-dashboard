"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { 
    name: 'Heath Summary', 
    href: '/dashboard'
  },
  { 
    name: 'Test Results', 
    href: '/dashboard/test-results'
  },
  { 
    name: 'Medications', 
    href: '/dashboard/medications'
  },
  { 
    name: 'Send a Message', 
    href: '/dashboard/contact-us'
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={ pathname === link.href ? 'active' : ''}
          >
            { link.name }
          </Link>
        </li>
      ))}
    </ul>
  )
}