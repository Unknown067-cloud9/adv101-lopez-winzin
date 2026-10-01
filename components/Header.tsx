'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <header style={{ backgroundColor: '#0f172a', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>DEV.FOLIO</h2>
      <nav style={{ display: 'flex', gap: '8px' }}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '14px',
                color: isActive ? '#ffffff' : '#cbd5e1',
                backgroundColor: isActive ? '#2563eb' : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
