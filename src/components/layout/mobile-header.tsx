'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { navLinks } from '@/lib/constants';

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'block text-lg font-medium transition-colors duration-200 hover:text-primary px-4 py-3',
        pathname === href ? 'text-primary font-semibold' : 'text-foreground'
      )}
    >
      {label}
    </Link>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-start text-2xl font-extrabold tracking-tight"
    >
      <span className="text-bold">UBH CLOTHING</span>
      <span className="text-xs align-top h-[32px] pt-1">®</span>
    </Link>
  );
}

export default function MobileHeader() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const closeMenu = () => setIsActive(false);

  return (
    <header className="sticky top-0 z-50 w-full border-t-[5px] border-black bg-white shadow-sm">
      <div className="px-4 flex h-[70px] items-center justify-between w-full">
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* Hamburger Menu */}
        <button
          aria-label="Toggle menu"
          className={cn(
            'menu-toggle flex flex-col justify-center w-8 h-8 relative transition-all',
            isActive ? 'menu-toggle-active' : ''
          )}
          onClick={handleToggle}
        >
          <span
            className={cn(
              'block h-[2px] w-6 bg-black transition-transform duration-300',
              isActive ? 'rotate-45 translate-y-[6px]' : ''
            )}
          ></span>
          <span
            className={cn(
              'block h-[2px] w-6 bg-black my-1 transition-opacity duration-300',
              isActive ? 'opacity-0' : 'opacity-100'
            )}
          ></span>
          <span
            className={cn(
              'block h-[2px] w-6 bg-black transition-transform duration-300',
              isActive ? '-rotate-45 -translate-y-[6px]' : ''
            )}
          ></span>
        </button>
      </div>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isActive && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute left-0 top-[70px] w-full bg-white border-t border-border shadow-md z-40"
          >
            <div className="flex flex-col items-start py-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={closeMenu}
                />
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
