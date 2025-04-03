import React, { useState } from 'react';
import { Button } from 'pixel-retroui';
import { ThemeContext } from '../context/theme';
import themePresets from '../theme';
import { FaLaptopCode, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { cn, getColorCode } from '../lib/util';

const getButton = (title, theme) => {
  return (
    <Button
      onClick={() => { console.log('redirect to github') }}
      bg={getColorCode(themePresets[theme].bg)}
      textColor={getColorCode(themePresets[theme].textColor)}
      borderColor={getColorCode(themePresets[theme].borderColor)}
      shadow={getColorCode(themePresets[theme].shadow)}
      // className=
    >
      {title}
    </Button>
  )
}

const Navbar = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('Navbar must be used within a ThemeProvider');
  }
  const { theme, toggleTheme } = context;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn('shadow-md font-bold', themePresets[theme].textColor)}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-10">
          <div className={cn('flex items-center gap-5 text-2xl cursor-pointer')}>
            <div className={cn(themePresets[theme].textColor)}>
              <FaLaptopCode />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-lg">
            {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
              <p key={item} className={cn("cursor-pointer transition", themePresets[theme].textColor)}>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-10">
          <div className="hidden lg:block">
            {getButton('Github Profile', theme)}
          </div>

          {/* Theme Toggle */}
          <div onClick={toggleTheme} className="hidden lg:block cursor-pointer text-2xl">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex items-center gap-5 lg:hidden cursor-pointer text-2xl">
            <div onClick={toggleTheme} className="lg:hidden cursor-pointer text-2xl">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={cn('lg:hidden flex flex-col gap-1 mt-5 rounded-md ml-[-2px]', themePresets[theme].textColor)}>
          {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
            <p key={item} className={cn(`cursor-pointer flex items-center py-2 px-1`, theme === 'light' ? `hover:bg-[#24242B] hover:text-[#D2D2D2]` : `hover:bg-[#D2D2D2] hover:text-[#24242B]`)}>{item}</p>
          ))}
          <div className="font-bold ml-[-10px]">
            {getButton('Github Profile', theme)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
