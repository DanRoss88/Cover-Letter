import React, { useEffect, useState } from "react";
import Link from "next/link";
import { slide as Menu } from 'react-burger-menu';

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const HamburgerMenu = () => (
    <div className='relative p-2'>
      <Menu customBurgerIcon={<HamburgerIcon />} width={'auto'} className='left-0 top-12'>
        <Links />
      </Menu>
    </div>
  );

  const HamburgerIcon = () => (
    <div className='p-1/2'>
      <svg className="w-8 h-8 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
  );

  const Links = () => (
    <>
      <li>
        <Link href="#about" scroll={false}>
          About
        </Link>
      </li>
      <li>
        <Link href="#projects" scroll={false}>
          Projects
        </Link>
      </li>
      <li>
        <Link href="#whyyou" scroll={false}>
          Why Your Company?
        </Link>
      </li>
      <li>
        <Link href="#whyme" scroll={false}>
          Why Hire Me?
        </Link>
      </li>
      <li>
        <Link href="#skills" scroll={false}>
          Skills
        </Link>
      </li>
      <li>
        <Link href="#references" scroll={false}>
          References
        </Link>
      </li>
      <li>
        <Link href="https://flowcv.com/resume/9th3fq6rpv" scroll={false}>
          Resume
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar">
      <div className="logo-name">
        <h1>Daniel Ross</h1>
      </div>
      {isMobile ? (
        <div className='max-w-full h-12 flex justify-start items-center bg-black mb-4 text-white rounded-md'>
          <div className='flex md:hidden'>
            <HamburgerMenu />
          </div>
        </div>
      ) : (
        <ul>
          <Links />
        </ul>
      )}
    </nav>
  );
}