import React from 'react'
import themePresets from '../theme'

import { ThemeContext } from '../context/theme';
import { Bio } from '../data/constant'
import { Typewriter } from 'react-simple-typewriter';
import { cn } from '../lib/util'
const Hero = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('Hero must be used within a ThemeProvider');
  }
  const { theme } = context;
  return (
    <div id="about" className={cn(themePresets[theme].textColor)}>
      {/* left  */}
      <div>
        <div className="md:text-center">
          <div className="font-bold text-[26px] leading-[55px] md:text-[30px] md:leading-[48px]">
            Hi, I am {Bio.name}
          </div>

          <div className="flex flex-wrap justify-start md:justify-center font-semibold text-[20px] leading-[55px] md:text-[25px] md:leading-[48px]">
            {`I am a `}
            <span className="ml-2">
              <Typewriter
                words={Bio.roles}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>

        <div className={cn('text-justify')}>{Bio.description}</div>
        {/* <ResumeButton style={{ color: `${theme === 'darkTheme' ? darkTheme.color : lightTheme.color}` }} href='https://drive.google.com/file/d/11XUZ5J4bOR-u-v5qaqQJIghnz1070yOi/view?usp=sharing' target='_blank'>View & Download Resume</ResumeButton> */}
      </div >
    </div >
  )
}

export default Hero