'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { CiMenuFries } from "react-icons/ci";
import { Button } from '../ui/button';


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-between items-center px-6 py-4 dark:shadow-white/10 shadow-md rounded-b-2xl bg-white/90 dark:bg-[#111]/90">
        <Link href='/' className="font-[MyFont] flex flex-col justify-between items-center">
          <h1 className="text-4xl md:text-6xl w-full text-center tracking-wider font-bold">AREEB</h1>
          <p className="text-xl md:text-3xl w-full text-center tracking-[0.35em] font-bold">Developer</p>
        </Link>

        <div className="hidden  md:flex lg:gap-10 md:gap-5 text-lg font-medium nav-components items-center">
          <ThemeSwitch />
          <Link href="/#about" className="relative px-3 py-1 rounded-full overflow-hidden text-black dark:text-white  before:absolute before:top-0 before:left-0 before:w-0 before:h-full  before:bg-green-400 dark:before:bg-green-700 before:z-0  before:transition-all before:duration-300  hover:before:w-full"><span className="relative z-10">About</span></Link>
          <Link className="relative px-3 py-1 rounded-full overflow-hidden text-black dark:text-white  before:absolute before:top-0 before:left-0 before:w-0 before:h-full  before:bg-green-400 dark:before:bg-green-700 before:z-0  before:transition-all before:duration-300  hover:before:w-full" href="#skills"><span className="relative z-10">Skills</span></Link>
          <Link className="relative px-3 py-1 rounded-full overflow-hidden text-black dark:text-white  before:absolute before:top-0 before:left-0 before:w-0 before:h-full  before:bg-green-400 dark:before:bg-green-700 before:z-0  before:transition-all before:duration-300  hover:before:w-full" href="/projects"><span className="relative z-10">Projects</span></Link>
          {/* <Link className="relative px-3 py-1 rounded-full overflow-hidden text-black dark:text-white  before:absolute before:top-0 before:left-0 before:w-0 before:h-full  before:bg-green-400 dark:before:bg-green-700 before:z-0  before:transition-all before:duration-300  hover:before:w-full" href="/blogs"><span className="relative z-10">Blogs</span></Link> */}
          <Link className="relative px-3 py-1 rounded-full overflow-hidden text-black dark:text-white  before:absolute before:top-0 before:left-0 before:w-0 before:h-full  before:bg-green-400 dark:before:bg-green-700 before:z-0  before:transition-all before:duration-300  hover:before:w-full" href="/contact"><span className="relative z-10">Connect</span></Link>
        </div>

        {/* Mobile view */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeSwitch />   {/* Optional: keep dark toggle in mobile */}
          <Button type='button' size='icon'>
            <CiMenuFries size={30} />
          </Button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
