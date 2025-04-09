import { cn } from '../lib/util';
import { useContext } from 'react';
import themePresets from '../theme';
import { ThemeContext } from '../context/theme';

const ExperienceCard = ({ experience }) => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = themePresets[theme];

  return (
    <div
      className={cn(
        'nes-container is-rounded  w-full md:w-[650px] border p-4 md:p-6 rounded-xl transform transition-transform duration-300 hover:-translate-y-2',
        currentTheme.borderColor,
        theme === 'dark' ? 'is-dark' : ''
      )}
      style={{ backgroundColor: 'transparent', }}
    >
      {/* Top section */}
      <div className="flex gap-4 items-center">
        <img
          src={experience.img}
          alt="company"
          className="h-[50px] md:h-[50px] rounded-lg mt-1"
        />
        <div className="flex flex-col items-start gap-1">
          <div className={cn('text-lg md:text-xl font-semibold', currentTheme.textColor)}>
            {experience.role}
          </div>
          <div className={cn('text-[14px] md:text-[16px]', currentTheme.textColor)}>
            {experience.company}
          </div>
          <div className={cn('text-[12px] md:text-[14px]', currentTheme.textColor)}>
            {experience.date}
          </div>
        </div>
      </div>

      {/* Description */}
      {experience.desc && (
        <div className="text-[15px] font-normal text-justify my-2 group">
          <p
            className={cn(
              'line-clamp-4 group-hover:line-clamp-none transition-all duration-300',
              currentTheme.textColor
            )}
          >
            {experience.desc}
          </p>
        </div>
      )}

      {/* Skills */}

      {experience.skills?.length > 0 && (
        <div
          className="flex gap-2"
        >
          <div className={cn('text-sm font-semibold', currentTheme.textColor)}>Skills:</div>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <div
                key={index}
                className={cn('text-sm', currentTheme.textColor)}
              >
                • {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;



