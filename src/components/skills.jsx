import React from 'react'
import { cn, getColorCode } from '../lib/util'
import { ThemeContext } from '../context/theme';
import themePresets from '../theme'
import { skills } from '../data/constant'
import { Card } from 'pixel-retroui';

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
            <Card
              bg={getColorCode(themePresets[theme].bg)}
              textColor={getColorCode(themePresets[theme].textColor)}
              borderColor={getColorCode(themePresets[theme].borderColor)}
              shadowColor={getColorCode(themePresets[theme].shadowColor)}
              className="nova-square w-full max-w-[500px] px-9 py-4 sm:max-w-[400px] sm:py-2 xs:max-w-[330px]" key={index}>
              <h2 className={cn('text-[28px] font-semibold text-secondary mb-5 text-center', themePresets[theme].textColor)}>{skill.title}</h2>
              <div className='flex justify-center flex-wrap gap-3'>
                {skill.skills.map((item, index) => (
                  // <div className={cn(`  `, themePresets[theme].textColor, theme === 'light' ? 'border border-red-' : 'border border-[#D2D2D2]')} key={index}>
                  //   {/* <SkillImage src={item.image} /> */}
                  //   <a href={'#'} target=''>
                  //     {item.name}</a>
                  // </div>
                  <div className={cn('nes-container is-rounded')} style={{padding:'2px'}} key={index}>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Skills