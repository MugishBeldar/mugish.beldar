import themePresets from '../theme';
import React, { useState } from 'react';
import { cn, getColorCode } from '../lib/util';
import { ThemeContext } from '../context/theme';

const getButton = (title, theme) => {
  return (
    <button
      onClick={() => { console.log('redirect to github') }}
      className={cn("nes-btn", theme === 'dark' ? 'dark' : '')}
      style={{ backgroundColor: getColorCode(themePresets[theme].bg), color: getColorCode(themePresets[theme].textColor) }}
    >
      {title}
    </button>
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
      className={cn('font-bold', themePresets[theme].textColor)}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-10">
          <div className={cn('flex items-center gap-5 text-2xl cursor-pointer w-[40px]')}>
            <div className={cn(themePresets[theme].textColor)}>
              {theme === 'light' ? <img src={'/assets/mstile-70x70-dark.png'} alt='user_logo' /> : <img src={'/assets/mstile-70x70-light.png'} alt='user_logo' />}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-lg mt-[14px]">
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
          <div onClick={toggleTheme} className="hidden lg:flex lg:items-center cursor-pointer text-2xl">
            {theme === 'light' ? < i className="hn hn-moon-solid" /> : <i className="hn hn-sun-solid" />}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex items-center gap-5 lg:hidden cursor-pointer text-2xl">
            <div onClick={toggleTheme} className="lg:hidden cursor-pointer text-2xl flex items-center">
              {theme === 'light' ? < i className="hn hn-moon-solid lg:hidden" /> : <i className="hn hn-sun-solid lg:hidden" />}
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="flex items-center lg:hidden ">
              {isOpen ? <i className="hn hn-times-circle-solid lg:hidden" /> : <i className="hn hn-bars-solid lg:hidden" />}
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
          <div className="font-bold">
            {getButton('Github Profile', theme)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
