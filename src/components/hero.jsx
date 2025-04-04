import React from 'react'
import themePresets from '../theme'
import { Button } from 'pixel-retroui';
import { ThemeContext } from '../context/theme';
import { Bio } from '../data/constant'
import { Typewriter } from 'react-simple-typewriter';
import { cn, getColorCode } from '../lib/util'
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
        <div className='font-bold ml-[-10px] mt-4 flex justify-center'>
          <Button
            onClick={() => { console.log('open drive link to view and download resume') }}
            bg={getColorCode(themePresets[theme].bg)}
            textColor={getColorCode(themePresets[theme].textColor)}
            borderColor={getColorCode(themePresets[theme].borderColor)}
            shadow={getColorCode(themePresets[theme].shadow)}
            className={cn(`nova-square`)}
          >
            View & Download Resume
          </Button>
        </div>
      </div >
    </div >
  )
}

export default Hero