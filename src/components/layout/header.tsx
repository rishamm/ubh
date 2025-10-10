'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';
import { navLinks } from '@/lib/constants';


function NavLink({ href, label }: { href: string; label: string; }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        'relative font-medium transition-colors no-underline',
        'after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary after:origin-center after:scale-x-0 after:transition-transform after:duration-75 hover:after:scale-x-100',
        pathname === href ? 'text-primary font-semibold' : ''
      )}
    >
      {label}
    </Link>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-start gap-1 text-2xl font-extrabold tracking-tight">
      <span className='text-[40px] text-bold'>UBH CLOTHING</span><span className="text-xs align-top h-[40px] ">®</span>
    </Link>
  );
}

export default function Header() {
 
  const allNavItems = [
    ...navLinks.slice(0, 2),
    { href: '/', label: 'Logo' },
    ...navLinks.slice(2),
   
  ];

 

  return (
    <header className="sticky top-0 z-50 w-full border-t-[5px] border-black bg-white shadow-sm">
      <div className="container flex h-[70px] items-center justify-center">
        <nav className="items-center justify-between w-full flex">
          <div className="flex items-center justify-between w-full">
            {allNavItems.map((link) => (
              <React.Fragment key={link.href}>
                {link.label === 'Logo' ? <Logo /> : <NavLink href={link.href} label={link.label} />}
              </React.Fragment>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
