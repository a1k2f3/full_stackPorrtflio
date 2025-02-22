'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Poppins as PoppinsFont } from 'next/font/google';
import { FaGithub } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close
import Link from 'next/link';

// Load Google Font
const Poppins = PoppinsFont({ subsets: ['latin'], weight: '100' });

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => setMenuOpen(!menuOpen); // Function to toggle menu

  return (
    <header
      className={`flex justify-between items-center p-5 bg-black ${Poppins.className} text-white`}
    >
      <h1 className="text-3xl font-extrabold text-gradient bg-clip-text shadow-lg">
        Akif Imran
      </h1>

      <div className="lg:hidden flex items-center flex-col">
        {/* Hamburger icon */}
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? (
            <FaTimes className="w-8 h-8" />
          ) : (
            <FaBars className="w-8 h-8" />
          )}
        </button>
      </div>

      <nav
        className={`lg:flex space-x-5 flex items-center justify-center bg-transparent top-0 left-0 sticky ${menuOpen ? 'block flex-col' : 'hidden'} lg:block`}
      >
        <Link
          href="#"
          className="hover:text-gray-400 hover:scale-105 transform transition-transform duration-300 font-semibold tracking-wide"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="hover:text-gray-400 hover:scale-105 transform transition-transform duration-300 font-semibold tracking-wide"
        >
          About
        </Link>
        <Link
          href="#Experience"
          className="hover:text-gray-400 hover:scale-105 transform transition-transform duration-300 font-semibold tracking-wide"
        >
          Experience
        </Link>
        <Link
          href="#project"
          className="hover:text-gray-400 hover:scale-105 transform transition-transform duration-300 font-semibold tracking-wide"
        >
          Projects
        </Link>
        
      
      </nav>

      <a
        href="https://github.com/a1k2f3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-10 h-10" />
      </a>
    </header>
  );
};

export default Header;
