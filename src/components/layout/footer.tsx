import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

const socialLinks = [
 
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ubh_clothing/' },

];

const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/lookbook', label: 'Lookbook' },
    { href: '/locate', 'label': 'Locate' }
];

const helpLinks = [
    { href: '/contact', label: 'Contact' },
    ,
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 text-2xl font-extrabold tracking-tight">
      <span className='text-[40px] text-bold'>UBH CLOTHING</span><div className="text-xs align-top h-[40px]">®</div>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className=" px-5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             {/* <Logo /> */}
              <div className='flex justify-start'>
                       <Image src="/logo.svg" alt="Description" width={200} height={200} unoptimized/>
                     </div>
            <p className="text-base">
             Different countries,
Different cultures,
One signature UBH
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-primary">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 flex xl:mt-0 xl:col-span-2">
              <div className="mr-16">
                <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {companyLinks.map((link) => (
                     <li key={link.label}>
                      <Link href={link.href} className="text-base hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">Help</h3>
              <ul className="mt-4 space-y-4">
                {helpLinks.map((link) => (
                   <li key={link.label}>
                    <Link href={link.href} className="text-base hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/80 pt-8">
          <p className="text-base text-center">
            &copy; {new Date().getFullYear()} ubh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
