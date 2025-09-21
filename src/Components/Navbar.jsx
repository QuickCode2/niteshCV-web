import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { NavLink } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='w-full bg-white fixed top-0 z-50 shadow'>
      <div className='container mx-auto flex items-center justify-between px-4 py-8 sm:px-12 md:px-24 lg:px-34'>
        {/* Logo + Title */}
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 bg-blue-500'></div>
          <h1 className='md:text-2xl font-bold'>
        <TypeAnimation
          sequence={[
            'Welcome To Portfolio🚨 ',
            1000,
            "Hello I'm Nitesh Prajapati🕵️", // ✅ Correct apostrophe usage
            1000,
            'Frontend Developer🔰',
            1000,
            'Fullstack Developer🔰',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.3em', display: 'inline-block' }}
          repeat={Infinity}
        />
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`}>ABOUT ME</NavLink>
          <NavLink to="/resume" className={({ isActive }) => `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`}>RESUME</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`}>PROJECTS</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`}>CONTACT ME</NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className='md:hidden'>
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-xl cursor-pointer' />
          ) : (
            <FaBars onClick={() => setShowMenu(!showMenu)} className='text-xl cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className='flex flex-col items-center space-y-6 h-screen py-20'>
          <NavLink onClick={() => setShowMenu(false)} to="/" className={({ isActive }) => `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`}>ABOUT ME</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/resume" className={({ isActive }) => `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`}>RESUME</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/projects" className={({ isActive }) => `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`}>PROJECTS</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact" className={({ isActive }) => `uppercase hover:text-blue-600 ${isActive ? "text-blue-500" : ""}`}>CONTACT ME</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;

