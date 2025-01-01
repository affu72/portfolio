import React from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Logo from "./../../public/logo.svg";

import Link from "next/link";

function Header() {
  return (
    <header
      data-name='header'
      className='bg-theme-primary border-b border-theme theme-transition sticky top-0 z-50 h-[calc(var(--header-height-mobile))] md:h-[var(--header-height-desktop)]'
    >
      <nav
        data-name='nav'
        className='container mx-auto px-6 h-full flex items-center'
      >
        <div
          data-name='nav-content'
          className='flex items-center justify-between w-full'
        >
          <h1
            data-name='logo'
            className='text-2xl font-bold text-theme-primary slide-in flex items-center gap-2'
          >
            <Image
              priority
              src={Logo}
              height={72}
              width={72}
              alt='Follow us on Twitter'
              className='h-[calc(var(--header-height-mobile)-30px)] md:h-[calc(var(--header-height-desktop)-18px)]'
            />
            {/* <span className='text-accent-primary'>fzal</span> */}
          </h1>
          <div className='flex items-center space-x-8'>
            <ul data-name='nav-links' className='hidden md:flex space-x-8'>
              <li>
                <Link
                  href='/'
                  className='text-theme-primary hover:text-accent-primary transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-theme-primary hover:text-accent-primary transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/projects'
                  className='text-theme-primary hover:text-accent-primary transition-colors'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-theme-primary hover:text-accent-primary transition-colors'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/resources'
                  className='text-theme-primary hover:text-accent-primary transition-colors'
                >
                  Resources
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
