import React from 'react'
import { cn, getColorCode } from '../lib/util'
import { ThemeContext } from '../context/theme';
import themePresets from '../theme'
import { skills } from '../data/constant'

const Skills = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('Skills must be used within a ThemeProvider');
  }
  const { theme } = context;
  return (
    <div className={cn()}>
      <div className={cn('flex flex-col mt-5 text-center font-bold text-[26px] md:text-[30px]', themePresets[theme].textColor)}>
        <p>Skills</p>
        <p className={cn('text-[18px] text-center sm:text-[16px]')}>Here are some of my skills.</p>
        <div className={cn('w-full flex flex-wrap justify-center gap-8 mt-8 p-4', themePresets[theme].containerBg)}>
          {skills.map((skill, index) => (
            <div style={{
              backgroundColor: 'transparent',
              color: getColorCode(themePresets[theme].textColor),
            }} className={cn("nes-container is-rounded with-title max-w-[500px] px-9 py-4 sm:max-w-[400px] sm:py-2 xs:max-w-[330px]", theme === 'dark' ? 'is-dark' : '')} key={index}>
              <p style={{ marginTop: theme==='light'?'-33px':'-25px', backgroundColor: getColorCode(themePresets[theme].bg) }} className={cn("title")}>
                {skill.title}
              </p>
              <div className='flex justify-center flex-wrap gap-3 text-[16px]'>
                {skill.skills.map((item, index) => (
                  <div className={cn('nes-container is-rounded', theme === 'dark' ? 'is-dark' : '')} style={{ backgroundColor: 'transparent', padding: theme === 'light' ? '2px' : '10px', margin: theme === 'dark' ? '1px' : '9px' }} key={index}>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default Skills