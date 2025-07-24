import React, { useState } from 'react';
import { FaMoon } from 'react-icons/fa';  // <-- import moon icon instead of beer

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, name: 'Home', links: '#home' },
    { id: 2, name: 'About', links: '#about' },
    { id: 3, name: 'Skills', links: '#skills' },
    { id: 4, name: 'My Projects', links: '#projects' }
  ];

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    const section = document.querySelector(id);
    if (!section) return;

    const viewportHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const sectionHeight = section.offsetHeight;

    const scrollToPosition = sectionTop - (viewportHeight / 2) + (sectionHeight / 2);

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header className='fixed top-0 left-0 w-full z-20 text-white bg-black'>
      <div className='container mx-auto flex items-center justify-between p-5'>
        {/* Logo */}
        <a href="#home" className='text-2xl font-bold italic'>
          Corbss
        </a>

        {/* Mobile Menu Toggle */}
        <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          <FaMoon className='w-8 h-8 bg-black text-white' />
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-7'>
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.links}
              className='hover:text-gray-300 text-lg'
              onClick={(e) => handleScrollToSection(e, link.links)}
            >
              {link.name}
            </a>
          ))}
          <button
            className='inline-flex text-white border-2 py-2 px-6 rounded-full text-sm sm:text-lg transition-all duration-300 hover:bg-[#369d9e] hover:shadow-[0_0_20px_#62ada5]'
            onClick={(e) => handleScrollToSection(e, '#contact')}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#000000] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
      >
        {/* Close Button */}
        <button className='absolute top-5 right-5 text-white' onClick={() => setIsOpen(false)}>
          <FaMoon className='w-8 h-8' />
        </button>

        {/* Mobile Navigation Links */}
        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.links}
            className='hover:text-gray-300 text-lg'
            onClick={(e) => handleScrollToSection(e, link.links)}
          >
            {link.name}
          </a>
        ))}

        {/* Contact Button */}
        <button
          className='inline-flex text-white border-2 py-2 px-6 rounded-full text-lg hover:bg-[#369d9e] hover:shadow-[0_0_20px_#62ada5]'
          onClick={(e) => handleScrollToSection(e, '#contact')}
        >
          Contact
        </button>
      </div>
    </header>
  );
}
