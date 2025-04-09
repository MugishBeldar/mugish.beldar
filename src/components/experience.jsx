import React from 'react';
import { cn } from '../lib/util';
import { ThemeContext } from '../context/theme';
import themePresets from '../theme';
import { experiences } from '../data/constant.js';
import ExperienceCard from './experienceCard.jsx';

const Experience = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('Experience must be used within a ThemeProvider');
  }
  const { theme } = context;
  return (
    <div className={cn('w-full mt-5 flex items-center justify-center')}>
      <div
        className={cn(
          'w-full flex flex-col items-center text-center font-bold text-[26px] md:text-[30px]',
          themePresets[theme].textColor
        )}
      >
        <p>Experience</p>
        <p className="text-[18px] text-center sm:text-[16px] font-normal mt-2">
          My work experience as a software engineer and working on different companies and projects.
        </p>

        <div className={cn('w-full flex flex-col items-center mt-4 py-4 px-4', themePresets[theme].containerBg)}>
          {experiences.map((experience, index) => (
            <div key={experience.id} className="flex flex-col items-center justify-center">
              <ExperienceCard experience={experience} />
              {index !== experiences.length - 1 && (
                <>
                  <div
                    className={cn(
                      'w-[3px] rounded-full h-[20px]',
                      theme === 'light' ? themePresets.dark.bg : themePresets.light.bg
                    )}
                  />
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full border-2 ',
                      theme === 'light' ? themePresets.light.borderColor : themePresets.dark.borderColor
                    )}
                  />
                  <div
                    className={cn(
                      'w-[3px] rounded-full h-[20px]',
                      theme === 'light' ? themePresets.dark.bg : themePresets.light.bg
                    )}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
