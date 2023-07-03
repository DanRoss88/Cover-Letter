import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1945);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <div className="max-w-full h-12 flex justify-start items-center bg-black mb-4 text-white rounded-md">
          <div className="relative p-2">
            <div
              className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
              onClick={handleMenuToggle}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
            {isMenuOpen && (
              <ul className="menu-list">
                <Links />
              </ul>
            )}
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